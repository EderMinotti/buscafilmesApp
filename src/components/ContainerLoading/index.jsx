import styles from "./containerloading.module.css";

export const ContainerLoading = ({ children }) => {
  return (
    <div className={styles.container_loading}>
      {children}
    </div>
  );
};
