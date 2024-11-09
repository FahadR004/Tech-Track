import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/courses.module.css"

const Courses = () => {
    return (  
        <>
        <div className={styles["courses-page"]}>
            <Navbar/>
            <div className={styles["mid-section"]}>
                <h1>Search Courses...</h1>
                <input
                    className={styles["courses-input"]}
                    id="courseinput"
                    type="text"
                    placeholder="Python, Javascript etc..."
                    required
                />
            </div>
            <Footer/>
        </div>
        </>
    );
}
 
export default Courses;