export const regex = {
  numbers: /(^[0-9|,]*$)/,
  cellphone: /(^09[0-9]*$)/,
  phone: /(^0[0-9]*$)/,
  persian: /(^[آ-ی+\s]*$)/,
  english: /(^[A-Z+a-z+\s]*$)/,
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const rules = {
  required: (value) => !!value || "وارد کردن این مورد الزامی است",
  required_price: (value) =>
    value.length > 0 || "وارد کردن این مورد الزامی است",
  array_required: (value) => value.length || "وارد کردن این مورد الزامی است",
  min: (v) => v == null || v.length <= 0 || v.length >= 8 || "حداقل 8 کاراکتر",
  min_value: (min) => (v) =>
    v == null ||
    parseInt((v + "").split(",").join("")) > min ||
    `حداقل مقدار معتبر ${new Intl.NumberFormat().format(min)} است`,
  max: (character) => (v) =>
    v == null ||
    v.length <= 0 ||
    v.length <= character ||
    `روز های وارد شده بیش از حد مجاز است`,
  national_code: (v) =>
    v == null || v.length == 10 || "کد ملی وارد شده صحیح نیست",
  numeric: (v) =>
    v == null ||
    v.length <= 0 ||
    regex.numbers.test(v) ||
    "این فیلد باید یک عدد و بدون فاصله باشد",
  num: (v) =>
    v == null ||
    v.length <= 0 ||
    regex.number.test(v) | "این فیلد باید یک عدد و بدون فاصله باشد",
  cellphone: (v) =>
    v == null ||
    v.length <= 0 ||
    (regex.cellphone.test(v) && v.length == 11) ||
    "شماره تلفن همراه صحیح نیست",
  phone: (v) =>
    v == null ||
    v.length <= 0 ||
    (regex.phone.test(v) && v?.length == 11) ||
    "شماره تلفن صحیح نیست",
  persian_string: (v) =>
    v == null ||
    v.length <= 0 ||
    regex.persian.test(v) ||
    "نام وارد شده باید فارسی باشد.",
  english_string: (v) =>
    v == null ||
    v.length <= 0 ||
    regex.english.test(v) ||
    "نام وارد شده باید انگلیسی باشد.",
  email: (v) =>
    v == null ||
    v.length <= 0 ||
    regex.email.test(v) ||
    "ایمیل وارد شده صحیح نیست",
  withoutSpace: (v) =>
    v == null ||
    v.length <= 0 ||
    !(v.includes(" ") || v.includes("-") || v.includes("_")) ||
    "لطفا محتوا را بدون فاصله بنویسید.",
};

export default rules;
