
interface InputProps {
  placeholder: string;
  icon?: React.ReactNode;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  type?: string; 
}

const Input: React.FC<InputProps> = ({ placeholder, icon, value, onChange, type = 'text' }) => {
  return (
    <div className="input-container">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
};

export default Input;