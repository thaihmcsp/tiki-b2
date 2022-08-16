import styles from'./Profile.module.css';
function MenuUserIcon(props) {
  console.log(props)
  return (
    <div className={styles.manuUser}>
      <a href='#' id={styles.manuList}>
        {props.title2} <span className={styles.icon}>{props.icon}</span>
       <span className={styles.title}>{props.title}</span>
       
        {props.children}
      </a>
    </div>
  );
}

export default MenuUserIcon;
