export const SearchIcon = ({className} : {className?: string}):JSX.Element => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.339 19.5751L15.9498 15.2562C17.0992 14.0074 17.8055 12.3559 17.8055 10.5386C17.8049 6.65103 14.6028 3.5 10.6524 3.5C6.70212 3.5 3.5 6.65103 3.5 10.5386C3.5 14.4261 6.70212 17.5772 10.6524 17.5772C12.3593 17.5772 13.9247 16.9868 15.1544 16.0054L19.5606 20.3414C19.7753 20.5529 20.1238 20.5529 20.3385 20.3414C20.5537 20.1299 20.5537 19.7866 20.339 19.5751Z" fill="white"/>
      <path d="M12 11.5L20.5 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

SearchIcon.defaultProps = {
  className: '',
}