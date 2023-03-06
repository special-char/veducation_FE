import Accordian from "@/components/Accordian";
import Reviews from "@/components/Reviews";
import React from "react";
import styles from "../../coursedetails.module.css";

const Description = ({ data, id, reviewdata }) => {
  return (
    <div>
      <div className={styles.coursedetails__faqpage}>
        <h5 className={styles.coursedetails__faqheader}>Topics Covered</h5>
        <Accordian data={data?.data?.attributes?.lesson} />
      </div>
      <div className={styles.coursedetails__rateing}>
        <div className={styles.coursedetails__star}>{"4.7"}</div>
        <Reviews
          slug={"course"}
          id={id}
          count={24}
          rate={4}
          width={22}
          height={22}
        />
      </div>
      <div className={styles.coursedetails__reviewinfo}>
        <h5 className="font-bold">Top Reviews</h5>
        <p className={styles.coursedetails__viewall}>View All</p>
      </div>

      <div className={styles.coursedetails__reviewpage}>
        {reviewdata?.map((val) => {
          return (
            <>
              <div key={val.id} className={styles.coursedetails__commentpage}>
                <div className={styles.coursedetails__ratingstar}>
                  <Reviews
                    count={val.count}
                    rate={val.rate}
                    width={18}
                    height={18}
                  />
                  <p className={styles.coursedetails__reviewerdate}>
                    {`By ${val.reviewer} - ${val.date}`}
                  </p>
                </div>
                <p className="text-base">{val.desc}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.coursedetails__faqpage}>
        <h5 className={styles.coursedetails__faqheader}>
          Frequently Asked Questions
        </h5>
        <Accordian data={data?.data?.attributes?.faq} />
        {/* <Accordian data={data1} /> */}
      </div>
    </div>
  );
};

export default Description;
