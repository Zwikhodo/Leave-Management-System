import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leave Management System</title>
      </Head>
      <h1 className={styles.title}>Leave Management System</h1>
      <div className={styles.container}>
        <label htmlFor="first name">First Name</label>
        <input type='text'></input>
        <label htmlFor="last name">Last Name</label>

        <input type='text'></input>
        <label htmlFor="leave type">Leave Type</label>

        <input type=''></input>
        <label htmlFor="start date">Start Date</label>

        <input type="datetime-local"></input>
        <label htmlFor="end date">End Date</label>

        <input type="datetime-local"></input>
        <label htmlFor="reason">Reason</label>

        <input type="text"></input>
        <label htmlFor="leave days taken">Leave days Taken</label>

        <input type="number"></input>
        <label htmlFor="leave balance">Leave Balance</label>

        <input type="number"></input>
      </div>
      <div className={styles.btn_container}>
        <Link href="/Landing">
          <button className={styles.btn}>Submit</button>
        </Link>
      </div>
    </>
  );
}
