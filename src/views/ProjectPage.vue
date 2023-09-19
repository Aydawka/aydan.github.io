<script setup lang="ts">
import {NList, NListItem, NCard, NButton} from "naive-ui";


</script>
<template>
  <main>
      <h1 class="prj">Projects
          <img src="../assets/FundProjectionScreenOutlined.svg" style="width: 40px;height: 40px">
      </h1>
    <div class="project-list">
         <div class="button-wng" style="display: flex;flex-wrap: wrap; gap: 3rem" >
      <n-button type="info" style="height: 3rem; width: 10rem"><RouterLink to="/contact"
    style="text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: 750;"
    >My Github
    </RouterLink>
    </n-button>
    <n-button type="info" style="height: 3rem; width: 15rem" content-style="margin-top: 10px;">
    <div class="list-items">
    <a href="https://orcid.org/0009-0001-6902-097X"
       target="_blank">
      <img src="../assets/Orcid.svg" style="width: 20px;height: 20px">
    </a>
    <a href="https://orcid.org/0009-0001-6902-097X"
       style="text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: 750;"
       target="_blank">My ORCID profile
    </a>
     </div>
    </n-button>
    </div>
  <n-list hoverable clickable>
        <n-list-item>
      <n-card title="Summer Housing for Conferences at UND" content-style="margin-top: 10px;">
The UND Summer Conference System is a web-based platform designed to facilitate
        the seamless organization of academic conferences. It offers users the
        capability to register, log in, and create teams, thus enabling efficient
        coordination for conference attendance. Powered by AngularJS for frontend
        and PHP for backend, with data stored in MySQL, participants can select their
        preferred conference day duration, tailoring their experience to their specific
        needs, and they can assemble teams with varying numbers of individuals to enhance
        collaboration and engagement. This integrated platform optimizes the logistics
        of academic gatherings, enhancing the overall experience for participants, speakers,
        and organizers alike.
      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card title="Conference Management System (CMS)"
        content-style="margin-top: 10px;">
        The main functionality of this conference management software is online registration,
        collecting submissions, papers management, peer review management, and accepting or rejecting authors submissions
        to be presented at the conference day(s). In addition, the conference management system may have further features
        depending on any other purposes determined by conference admins. This project implements a conference management
        system that allows the submission and review of papers for a conference. The system has the following user entities:
        Admin, Chief Editor, Reviewer,
        Author, and Paper each having different roles and attributes.
        This can be accomplished through a user-friendly conference management system. <br>
      </n-card>
    </n-list-item>
    <n-list-item>
      <n-card title="Web crawler with is a focused search engine" content-style="margin-top: 10px;">
        This project implement the first part of a World Wide Web search engine using Breadth-first searched based tree traversal method. It crawls web pages, collects data, builds a simple index, and saves the collected data.
        The users can specify the maximum number of web pages to be indexed. System collect as many pages as possible,
        but less than the maximum page number (500). Several seed URLs may be used and pages are collected accumulatively.
      </n-card>
    </n-list-item>


  </n-list>
    </div>
    </main>
</template>

<style scoped>
.n-list.n-list--show-divider.n-list--hoverable.n-list--clickable{
    width: 700px;
}

.project-list{
    display: flex;
    justify-content: center;
    flex-direction: column;
  align-items: center;
}

.button-wng{
  margin-top: 3rem;
}


.prj{display: flex;
  justify-content: center;

}


@media all and (max-width: 875px) {
.project-list{
 max-width: 25rem;
  align-items: baseline;
}
}



</style>
