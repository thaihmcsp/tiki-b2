import styles from'./Profile.module.css';
function MenuUserIcon(props) {
  console.log(props)
  return (
    <div className={styles.manuUser}>
      <span id={styles.manuList}>
        {props.title2} <span className={styles.icon}>{props.icon}</span>
       <span className={styles.title}>{props.title}</span>
       
        {props.children}
      </span>
    </div>
  );
}

export default MenuUserIcon;
