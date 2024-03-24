import './TextArea.css';

export function TextArea({ children, icon, type, ...props }) {
  return (
    <div className='input-icons'>
      <div className='icon'>
        {children}
      </div>
      <textarea className='input-field' type={type} {...props}/>
    </div>
  );
}
