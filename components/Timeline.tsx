"use client";
import styles from "./Timeline.module.css";
import { TimelineItem } from "@/lib/types";

function TypeBadge({ t }: { t: TimelineItem["type"] }) {
  const label = t.charAt(0).toUpperCase() + t.slice(1);
  return <span className={styles.badge}>{label}</span>;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((it, idx) => (
        <div className="tl-item" key={idx}>
          <span className="tl-dot" />
          <div className="tl-card">
            <div className={styles.row}>
              <TypeBadge t={it.type} />
              <div className="tl-meta">{it.period}</div>
            </div>
            <div className="tl-title">{it.title}{it.org ? ` · ${it.org}` : ""}</div>
            {it.summary ? <div className={styles.summary}>{it.summary}</div> : null}
            {it.tags?.length ? (
              <div className={styles.tags}>
                {it.tags.map((t, i) => <span className={styles.tag} key={i}>{t}</span>)}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
