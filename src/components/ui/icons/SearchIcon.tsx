export const SearchIcon = ({className} : {className?: string}):JSX.Element => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.56 13.0498L10.6339 10.1704C11.4001 9.33794 11.871 8.23693 11.871 7.0254C11.8706 4.4337 9.73583 2.33301 7.10228 2.33301C4.46873 2.33301 2.33398 4.4337 2.33398 7.0254C2.33398 9.6171 4.46873 11.7178 7.10228 11.7178C8.24016 11.7178 9.28379 11.3242 10.1036 10.6699L13.041 13.5606C13.1842 13.7016 13.4166 13.7016 13.5597 13.5606C13.7031 13.4196 13.7031 13.1908 13.56 13.0498Z" fill="#ABFFCE"/>
    </svg>

  );
};

SearchIcon.defaultProps = {
  className: '',
}