import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Course from "./Course";

const Tabs = ({ courses }) => {
  const [activeTab, setActiveTab] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Extract unique categories from courses
    const extractedCategories = courses.map((course) => course.category.trim());
    const uniqueCategories = Array.from(new Set(extractedCategories));

    setCategories(uniqueCategories);
    setActiveTab(uniqueCategories[0] || "General");
  }, [courses]);

  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <TabsWrapper>
      <div className="tabs">
        <ul className="flex flex-wrap">
          {categories.map((category, index) => (
            <li className="tabs-head-item" key={index}>
              <button
                type="button"
                className={`tab-btn ${activeTab === category ? "active" : ""}`}
                onClick={() => tabHandler(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="tabs-body">
          {courses
            .filter((course) => course.category.trim() === activeTab)
            .map((course) => (
              <Course key={course._id} {...course} CompleteCourse={course} />
            ))}
        </div>
      </div>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;
    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      min-width: 150px;
      padding: 8px 12px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    .tabs-body {
      margin-top: 32px;
      display: flex;
      justify-content: center;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Tabs;
