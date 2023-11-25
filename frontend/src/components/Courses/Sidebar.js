import React from 'react';
import styled from "styled-components";
import {MdClose} from "react-icons/md";
import {Link} from "react-router-dom";
import { useSidebarContext } from './context/sidebar_context';
import { useCoursesContext } from './context/course_context';

const Sidebar = () => {
  // const {categories} = useCoursesContext();
  // const {closeSidebar, isSidebarOpen} = useSidebarContext();

  return (
    // <SidebarWrapper className={`bg-white ${isSidebarOpen ? "show-sidebar" : ""}`}>
    //   <button type = "button" className='sidebar-close-btn' onClick={() => closeSidebar()}>
    //     <MdClose />
    //   </button>
    //   <div className='sidebar-content'>
    //     <h6 className='fs-18'>Top Categories</h6>
    //     <ul className='sidebar-category'>
    //       {
    //         categories.map((category, idx) => {
    //           return (
    //             <li className='sidebar-link-item fw-5' key = {idx}>
    //               <Link to = {`category/${category}`}>{category.toUpperCase()}</Link>
    //             </li>
    //           )
    //         })
    //       }
    //     </ul>
    //   </div>
    // </SidebarWrapper>
    <div>
      hello from sidebar
    </div>
  )
}


export default Sidebar