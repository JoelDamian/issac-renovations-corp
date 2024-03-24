import './Input.css';

export function Input({ children, icon, type, ...props }) {
  return (
    <div className='input-icons'>
      <div className='icon'>
        {children}
      </div>
      <input className='input-field' type={type} {...props}/>
    </div>
  );
}
