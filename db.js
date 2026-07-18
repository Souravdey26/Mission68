(function(){
  'use strict';
  const DB_NAME='mission68-v3', DB_VERSION=1;
  const stores=['foods','exercises','mealTemplates','workoutTemplates','dayLogs','weights','settings','strengthLogs'];
  let dbPromise;
  function open(){
    if(dbPromise) return dbPromise;
    dbPromise=new Promise((resolve,reject)=>{
      const req=indexedDB.open(DB_NAME,DB_VERSION);
      req.onupgradeneeded=()=>{const db=req.result;stores.forEach(s=>{if(!db.objectStoreNames.contains(s)) db.createObjectStore(s,{keyPath:'id'})})};
      req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error);
    });
    return dbPromise;
  }
  async function tx(store,mode,fn){const db=await open();return new Promise((resolve,reject)=>{const t=db.transaction(store,mode),s=t.objectStore(store);let out;try{out=fn(s)}catch(e){reject(e);return}t.oncomplete=()=>resolve(out);t.onerror=()=>reject(t.error)})}
  const api={
    async all(store){const db=await open();return new Promise((resolve,reject)=>{const r=db.transaction(store).objectStore(store).getAll();r.onsuccess=()=>resolve(r.result||[]);r.onerror=()=>reject(r.error)})},
    async get(store,id){const db=await open();return new Promise((resolve,reject)=>{const r=db.transaction(store).objectStore(store).get(id);r.onsuccess=()=>resolve(r.result||null);r.onerror=()=>reject(r.error)})},
    put(store,val){return tx(store,'readwrite',s=>s.put(val))},
    bulkPut(store,vals){return tx(store,'readwrite',s=>vals.forEach(v=>s.put(v)))},
    del(store,id){return tx(store,'readwrite',s=>s.delete(id))},
    clear(store){return tx(store,'readwrite',s=>s.clear())},
    stores
  };
  window.M68DB=api;
})();
