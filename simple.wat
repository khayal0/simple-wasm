;; simple.wat
(module
  (func (export "add") (param i32 i32) (result i32)
    get_local 0
    get_local 1
    i32.add)
)