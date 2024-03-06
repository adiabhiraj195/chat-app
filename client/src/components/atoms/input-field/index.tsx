import clsx from "../../../lib/clsx";

interface InputFieldInterface {
  placeholder: string;
  type: string;
  oninput: Function;
  value?: string | number;
  classname?: string;
}

export default function InputField({
  placeholder,
  type,
  oninput,
  value,
  classname,
}: InputFieldInterface) {
  return (
    <input
      className={clsx(classname, "bg-gray-800")}
      type={type}
      onInput={(e) => oninput((e.target as HTMLTextAreaElement).value)}
      value={value}
      placeholder={placeholder}
      
    />
  )
}
