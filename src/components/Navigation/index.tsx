import { Separator } from "@radix-ui/react-separator";
import useNavigations from "hooks/useNavigations";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useMemo } from "react";
import styles from "./style.module.scss";

function Navigation(): JSX.Element {
  const { pathname } = useRouter();
  const navigations = useNavigations();
  const items = useMemo(
    () =>
      navigations.map(({ href, title }, index) => (
        <Fragment key={href}>
          {index > 0 ? (
            <Separator
              className={styles.separator}
              decorative={true}
              orientation="vertical"
            />
          ) : null}
          <Link href={href}>
            <a className={pathname === href ? styles.active : ""}>{title}</a>
          </Link>
        </Fragment>
      )),
    [navigations, pathname]
  );

  return (
    <nav className={styles.navigation}>
      <div className={styles.inner}>{items}</div>
    </nav>
  );
}

export default Navigation;
