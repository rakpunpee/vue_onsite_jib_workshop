// const rules = {
//     name: [{ required: true, validator: validateText, trigger: "change" }],
//     price: [{ validator: validatePrice, trigger: "change" }],
//     stock: [{ validator: validateStock, trigger: "change" }],
//   };

export interface AntFormRuleType {
  required: boolean;
  validator: any;
  validateText: string;
  trigger: string;
}
