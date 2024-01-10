# Summary

- [RUST](rust/RUST.md)
- [TEMPLATE](TEMPLATE.md)
- [SHARED](shared/SHARED.md)

---


- [BORROWCHECKER](borrowchecker/BORROWCHECKER.md)
  - [SEMANTIC](borrowchecker/semantic/SEMANTIC.md)
  - [LIFETIME](borrowchecker/lifetime/LIFETIME.md)
    - [STATIC](borrowchecker/lifetime/static/LIFETIME_STATIC.md)  
    - [ELISION](borrowchecker/lifetime/elision/LIFETIME_ELISION.md)
    - [DANGLING](borrowchecker/lifetime/dangling/LIFETIME_DANGLING.md)
    - [GENERIC](borrowchecker/lifetime/generic/LIFETIME_GENERIC.md)

---

- [BENCHMARK](benchmark/BENCHMARK.md)

---

- [CPU](cpu/CPU.md)

---

- [POINTERS](pointers/POINTERS.md)
- [SMARTPOINTER](pointers/smartpointer/SMARTPOINTER.md)
  - [RC](pointers/smartpointer/compiletime/shared_owner_locally/rc/RC.md)  
  - [BOX](pointers/smartpointer/compiletime/box/BOX.md)    
  - [REF_CELL](pointers/smartpointer/runtime/shared_locally_mutability/ref-cell/REF_CELL.md) 
  - [OPS](pointers/smartpointer/ops/OPS.md) 
  - [COW](pointers/smartpointer/compiletime/cow/COW.md) 
  - [ARC](thread/sync/arc/ARC.md) 

---

- [PROCESS](process/PROCESS.md)

---

- [COLLECTION](collection/COLLECTION.md)
  - [HASHMAP](collection/hashmap/HASHMAP.md)    
  - [SLICE](collection/slice/SLICE.md)    
  - [VECTOR](collection/vec/VECTOR.md)
  - [LINKEDLIST](pointers/smartpointer/compiletime/shared_owner_locally/rc/linkedlist/LINKEDLIST.md)

---

- [COMMANDLINE](commandline/COMMANDLINE.md)  

---

- [DATA](data/DATA.md)
  - [OPERATOR](data/operator/OPERATOR.md)
  - [CONVERT](data/convert/CONVERT.md)    
  - [IO](data/io/IO.md)    
    - [FILE](data/io/file/FILE.md)            
  - [REGEX](data/regex/REGEX.md)    
  - [ARITHMETIC](data/arithmetic/ARITHMETIC.md)
  - [SERDE](data/serde/SERDE.md)  

---    

- [Duplication](duplication/Duplication.md)
  - [COPY_CLONE](duplication/copy-clone/COPY-CLONE.md)    
- [RC](pointers/smartpointer/compiletime/shared_owner/rc/RC.md)  

---

- [ERROR_HANDLING](errorhandling/ERROR_HANDLING.md)  
  - [ERROR_NONRECOVERABLE](errorhandling/non-recoverable/ERROR_NONRECOVERABLE.md)  

---

- [FEATURE](feature/FEATURE.md)  

---

- [FLOWCONTROL](flowcontrol/FLOWCONTROL.md)
  - [FOR](flowcontrol/for/FOR.md)    
  - [LOOP](flowcontrol/loop/LOOP.md)    
  - [WHILE](flowcontrol/while/WHILE.md)    
  - [MATCH](flowcontrol/match/MATCH.md)

---

- [FUNCTION PROGRAMMING](functional-programming/FUNC-PROG.md)
  - [CLOSURE](functional-programming/closure/CLOSURE.md)
  - [FUNCTION](functional-programming/function/FUNCTION.md)
  - [LAZY](functional-programming/lazy/LAZY.md)

---

- [LIBC](libc/LIBC.md)
    
---

- [NETWORK](network/NETWORK.md)  

---

- [OOP](oop/OOP.md)
  - [TRAIT](oop/trait/TRAIT.md)
- [DESIGN_PATTERN](oop/design_patterns/DESIGN_PATTERN.md)
  - [STATE_PATTERN](oop/design_patterns/behavioral/state-pattern/STATE_PATTERN.md)     
  - [BEHAVIOARAL](oop/design_patterns/behavioral/BEHAVIOARAL.md)   
    - [LPXXN](oop/design_patterns/behavioral/lpxxn/lpxxn-behavioral.md)  
    - [PROCESS](oop/design_patterns/behavioral/process/PROCESS.md) 
  - [CREATIONAL](oop/design_patterns/creational/CREATIONAL.md)   
    - [LPXXN](oop/design_patterns/creational/lpxxn/lpxxn-creational.md)  
  - [STRUCTRUAL](oop/design_patterns/structural/STRUCTURAL.md)   
    - [LPXXN](oop/design_patterns/structural/lpxxn/lpxxn-structural.md)  

---

- [TRAIT](trait/TRAIT.md)
  - [ASSOCIATE](trait/associate-type-or-trait/ASSOCIATE.md)  
  - [INHERITANCE](trait/inheritance/INHERITANCE.md)
  - [BUILT-IN](trait/built-in/BUILT_IN.md)  
  - [SHARED_BEHAVIOR](trait/shared-behavior/SHARED_BEHAVIOR.md)      
    - [BUILTIN-TRAIT](trait/shared-behavior/builtin-trait/BUILTIN-TRAIT.md)
    - [SAFE OBJECT](trait/shared-behavior/safe-object/SAFEOBJECT.md)
      - [TRAITOBJECT](trait/shared-behavior/safe-object/dispatchable/TRAITOBJECT.md)        
    - [NON_OBJECT_SAFE](trait/shared-behavior/none-object-safe/NONE_OBJECT_SAFE.md)
    - [AGGRIGATOR](trait/shared-behavior/aggregator/AGGRIGATOR.md)  
  - [TRAIT_BOUND](trait/shared-behavior/trait-bound/TRAIT_BOUND.md)
    - [OPERATOR](trait/shared-behavior/trait-bound/operator/OPERATOR.md)
---

- [TYPES](types/M_TYPES.md)
  - [GENERIC](types/generic/GENERIC.md)    
  - [RETURN](types/return/RETURN.md)          
  - [STATIC](types/static/STATIC.md)
  - [WRAPPER](types/wrapper/WRAPPER.md)
  - [RHS](types/rhs/RHS.md)         
  - [VAR](types/var/VAR.md) 
  - [SCALAR](types/mscal/M_SCAL.md)    
    - [NUMERIC](types/mscal/numeric/NUMERIC.md)        
      - [PRIMITIVE](types/mscal/numeric/primitive/PRIMITIVE.md)
      - [NUM](types/mscal/numeric/num/NUM.md)        
    - [NON_NUMERIC](types/mscal/non_numeric/NON_NUMERIC.md)        
      - [STRING](types/mscal/non_numeric/string/STRING.md)
      - [CHAR](types/mscal/non_numeric/char/CHAR.md)
  - [COMPOUND](types/compound/COMPOUND.md)
    - [ARRAY](types/compound/array/ARRAY.md)
    - [TUPLE](types/compound/tuple/TUPLE.md)
    - [UNION](types/compound/union/UNION.md)
    - [STRUCT](types/compound/struct/STRUCT.md)
    - [ENUM](types/compound/enum/ENUM.md)
    - [OPTION](types/compound/option/OPTION.md)

---

- [STDMISC](stdmisc/STDMISC.md)
  - [thread-channel](stdmisc/rust-doc/rd-thread-channel)
  - [path](stdmisc/rust-doc/rd-path)
  - [file](stdmisc/rust-doc/rd-file)
  - [filesystem](stdmisc/rust-doc/rd-filesystem)
  - [command-process](stdmisc/rust-doc/rd-command-process)
  - [ffi](stdmisc/rust-doc/rd-ffi)
  
---

- [THREAD](thread/THREAD.md)
  - [RACE](thread/race/RACE.md)    
  - [RAYON](thread/rayon/RAYON.md)    
  - [Sync_Atomic_Mutex](thread/sync/ATOMIC.md)    
  - [MPSC](thread/mpsc/MPSC.md)    
  - [THREAD_TIME](thread/time/THREAD-TIME.md)  
  
---

- [TIME](time/TIME.md)

---

- [TEST](tests/TESTS.md)  
  - [Structures](tests/test_structures/test-structures.md)    
    - [Unit](tests/test_structures/test_unit/test-unit.md)    
    - [Pretty](tests/test_structures/test_pretty/test-pretty.md)  
    - [Proptest](tests/test_structures/test_proptest/test-proptest.md)
    - [Proptest_runner](tests/test_structures/test_proptest_runner/test-proptest_runner.md)  
    - [Fixture](tests/test_structures/test_fixture/test-fixture.md)
  - [Samples](tests/tests_samples/test-samples.md)          
  
---

- [UNSAFE](unsafe/UNSAFE.md)
  - [EXTERN_FFI](unsafe/extern-ffi/EXTERN-FFI.md)
  - [SAFE_ABSTRACTION](unsafe/safe-abstraction/SAFE_ABSTRACTION.md)
  - [SAFE_STATIC_MUT](unsafe/safe-static-mut/SAFE_STATIC_MUT.md)
  - [THREAD_UNSAFE](unsafe/unsafe-thread/THREAD_UNSAFE.md)
  
---

- [MACRO](macro/MACRO.md)

---

- [MOUDULE](module/MODULE.md)

---

- [MEMORY](memory/MEMORY.md)
  - [ALLOCATOR](memory/allocator/ALLOCATOR.md)
  - [PISTON](memory/piston/PISTON.md)
  
---

- [IDIOMS](idioms/IDIOMS.md)
- [GRAMMER](grammer/GRAMMER.md)
- [BRAIN_TREASER](brain-teaser/BRAIN_TREASER.md)
- [QUESTIONS](questions/QUESTIONS.md)
  - [TBYTE](questions/triplebyte/TBYTE.md)
- [ALGORITHM](algorithm/ALGORITHM.md)
