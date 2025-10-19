import Image from "next/image";
import styles from "./TechPill.module.css";
export default function TechPill({ name, icon }: { name: string; icon?: string }) {
  return (
    <span className={styles.pill}>
      {icon ? <Image src={icon} alt={name} width={18} height={18} /> : null}
      {name}
    </span>
  );
}
