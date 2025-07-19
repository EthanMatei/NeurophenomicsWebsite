import React from "react";
import styled from "styled-components";
import drnimg from '../../assets/Dr.N.png';
import helenimg from '../../assets/Helen_2010.jpg'
import rowanimg from '../../assets/rb.png';
import jessicaimg from '../../assets/Jessica.png';
import sophiaimg from '../../assets/SophiaCorey.png';
import ethanimg from '../../assets/Ethan.jpg';
import andyimg from '../../assets/Andy Med Student.png';
import emilyimg from '../../assets/Emily.png';
import joyateeimg from '../../assets/Joyateepng.png';
import adamimg from '../../assets/Adam.jpg';

import aayushimg from '../../assets/Aayush.png';
import mackenzieimg from '../../assets/Mackenzie.jpg';
import nicholasimg from '../../assets/Nicholas.jpg';
import robertimg from '../../assets/Robert.jpeg';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #2c3e50;
`;

/* Styles for Current Members */
const MemberCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MemberImage = styled.img`
  width: 196px;
  height: 256px;
  border: 1px solid #ddd;
  object-fit: cover;
`;

const MemberInfo = styled.div`
  font-size: 1rem;
  color: #34495e;
`;

const MemberName = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  color: #2c3e50;
`;

const MemberTitle = styled.p`
  margin: 10px 0 0;
  font-size: 1.1rem;
  line-height: 1.5;
  white-space: pre-wrap; /* Allows \n to work */
`;


/* Styles for Alumni */
const AlumniList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
`;

const AlumniItem = styled.li`
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #7f8c8d;
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
function LabMembers() {
  const currentMembers = [
    {
      name: 'Alexander B. Niculescu III, M.D., Ph.D.',
      title: 'Professor of Psychiatry, Founding Director, C4P (Center for Precise, Personalized, and Preventive Psychiatry)\nThe University of Arizona College of Medicine – Phoenix\nStaff Psychiatrist and R&D Investigator, Carl T. Hayden VA Medical Center \n\nEmail: aniculescu@arizona.edu',
      image: drnimg, // Add your images to the public folder
    },
    {
      name: 'Helen Le-Niculescu, Ph.D.',
      title: 'Staff Scientist',
      image: helenimg,
    },
    {
      name: 'Aayush Rastogi',
      title: 'Undergraduate Research Assistant',
      image: aayushimg,
    },
    {
      name: 'Adam Bedeir',
      title: 'High School Intern',
      image: adamimg,
    },
    {
      name: 'Rowan Bhagar',
      title: 'Undergraduate Research Assistant',
      image: rowanimg,
    },
    {
      name: 'Jessica Cooke, B.Sc.',
      title: 'Graduate Research Assistant',
      image: jessicaimg,
    },
    {
      name: 'Sophia Corey',
      title: 'Undergraduate Research Assistant',
      image: sophiaimg,
    },
    {
      name: 'Andy Gettelfinger, M.Sc.',
      title: 'Medical Student',
      image: andyimg,
    },
    {
      name: 'Ethan Matei',
      title: 'Undergraduate Research Assistant',
      image: ethanimg,
    },
    {
      name: 'Emily Paul, B.Sc.',
      title: 'Graduate Research Assistant',
      image: emilyimg,
    },
    {
      name: 'Joyatee Sarker, M.D., Ph.D.',
      title: 'Psychiatry Resident',
      image: joyateeimg,
    },
    {
      name: 'Mackenzie Lopez',
      title: 'Undergraduate Research Assistant',
      image: mackenzieimg,
    },
    {
      name: 'Nicholas Novell',
      title: 'Undergraduate Research Assistant',
      image: nicholasimg,
    },
    {
      name: 'Robert Salgado',
      title: 'Undergraduate Research Assistant',
      image: robertimg,
    }
  ];

  const alumni = [
    { name: "Will Anastasiadis, Psy.D.", title: "Children's Hospital Colorado, CO" },
    { name: "TEST", title: "TEST" },
    { name: "Katie Andrews, M.D., Ph.D.", title: "Indiana University School of Medicine" },
    { name: "Brion Bertsh, M.D.", title: "Neurologist, Fairmount, IN" },
    { name: "Sugandha Bhosrekar, M.D.", title: "Psychiatrist, Minneapolis, MN" },
    { name: "Elizabeth Belanger, Psy.D.", title: "Clinical Psychologist, Hinesville VA Clinic, GA" },
    { name: "Dean Bowker, M.D.", title: "Anesthesiology, California Pacific Medical Center, CA" },
    { name: "Natalie Case", title: "Project Manager, Labcorp, Evansville, IN" },
    { name: "Jeremy Davis, Psy.D.", title: "Clinical Neuropsychologist, UT Health San Antonio, TX" },
    { name: "Craig Dike, Psy.D.", title: "Psychologist, VA Medical Center, San Antonio, TX" },
    { name: "Kaitlyn Engle, MD", title: "Pediatrics Resident, IU School of Medicine" },
    { name: "Miranda Gavrin", title: "Software Engineer, Aurora, Pittsburgh, PA" },
    { name : "Sumanpreet Singh Gill, M.D.", title: "Family Medicine Resident"},
    { name: "Emily Gilmore, Psy.D.", title: "Clinical Psychologist, Bethel Olentangy, Columbus, OH" },
    { name: "Katie Harlow, M.D.", title: "Pediatric Gastroenterology, Riley Children's Health, IN" },
    { name: "Leslie Hulvershorn, M.D.", title: "Chairman, Department of Psychiatry, IU School of Medicine" },
    { name: "Brigid Kirlin, RN NPI", title: "Dental Medical Support Services, Indianapolis, IN" },
    { name: "Daniel Levey, Ph.D.", title: "Assistant Professor of Psychiatry, Yale School of Medicine" },
    { name: "Shira Louria, Psy.D.", title: "Clinical Psychologist, University of Vermont Health Network, VT" },
    { name: "SudhaRani Mamidipalli, M.S.", title: "Data Curation Strategy Leader, Eli Lilly, Indianapolis" },
    { name : "Jim Mullen, Ph.D.", title: "IT Guru"},
    { name: "Lauren Myers", title: "Doctoral Intern, Jane Pauley Community Health Center, Anderson, IN" },
    { name: "Kyle Olesek, Psy.D.", title: "Psychologist, VA Medical Center, Indianapolis" },
    { name: "Zachary Parrett, Psy.D.", title: "Psychologist, VA Medical Center, Kansas City, MO" },
    { name: "Peter Phalen, Psy.D.", title: "University of Maryland" },
    { name: "Hayley Robertson, Pharm.D.", title: "Pharmacist, Indianapolis, IN" },
    { name: "Swapna Raavi, M.D.", title: "Internal Medicine, St. Luke's, Duluth & Hermantown, MN" },
    { name: "Katie Soe, M.D.", title: "Pediatrics/Child & Adolescent Psychiatry Residency, IU School of Medicine" },
    { name: "Robert M. Shweitzer, M.D.", title: "Psychiatrist, Indianapolis, IN" },
    { name: "Amy Steiner, Psy.D., LP", title: "Neuropsychologist, Minneapolis, MN" },
    { name: "Naga Prasuna Vanipenta, M.D.", title: "Psychiatrist, Kansas City, MO" },
    { name: "Stefanie K. Wolf, M.D.", title: "Neurology, Gallipolis, OH" },
    { name: "Evan Winiger, Ph.D.", title: "Research Fellow, Institute for Behavioral Genetics, Denver, CO" },
    { name: "Mikias Ayalew, M.S.", title: "Software Engineer, Glassdoor, San Francisco, CA" },
    { name: "Meghana Bhat, M.D.", title: "Adult Psychiatry, Meridian Health Services, IN" },
    { name: "Yokesh Balaraman, M.D.", title: "Psychiatry Specialist, Fort Wayne, IN" },
    { name: "David M. Bertram, Psy.D.", title: "Clinical Psychologist, Grand Rapids, MI" },
    { name: "Alyson Brener", title: "Marriage and Family Therapy, Scotia, NY" },
    { name: "Helen Dainton", title: "Resident, Neuropsychiatry, University of South Carolina School of Medicine" },
    { name: "Christine Daly, MSc.", title: "Medical Student, IU School of Medicine" },
    { name: "Bharathi Eddula, M.D.", title: "Psychiatrist, Orlando, FL" },
    { name: "Griffin Fitzgerald", title: "Principal Scientist, Imaging and Pharmacology, Eli Lilly" },
    { name: "Sunita George, Psy.D.", title: "Psychologist, Modern Therapy, Houston, TX" },
    { name: "Steven Hightshue, PT, DPT, ODCS", title: "Doctor of Physical Therapy, Gainesville, GA" },
    { name: "Alison James, Psy.D.", title: "Staff Psychologist, VA Maryland, Baltimore, MD" },
    { name: "Seth Judd, D.O.", title: "Psychiatry, Napa State Hospital, CA" },
    { name: "Kaitlyn Kosary, M.S.", title: "Lab Technician, Advocate Christ Medical Center, Oak Lawn, IL" },
    { name: "Thatcher Ladd, Ph.D.", title: "Stark Neurosciences Research Institute, IU School of Medicine" },
    { name: "Rebecca Learman, MSW PA-C", title: "Psychiatric Physician Assistant, Henry Ford Allegiance Health" },
    { name: "Thomas Lowe, M.D.", title: "Diagnostic Radiology, Indianapolis & Mishawaka, IN" },
    { name: "Matthew J. McFarland, RPh., Ph.D.", title: "Vice President of Commercialization, Nationwide Children's Hospital" },
    { name: "Cory A. Ogden, M.D.", title: "Urgent Care, Family Medicine, Sunnyside, OR" },
    { name: "Laura E. Palmer, M.D.", title: "Anesthesiologist, Community Hospital North, Indianapolis, IN" },
    { name: "Sagar D. Patel, M.D.", title: "Emergency Medicine Physician, Community Hospital East, IN" },
    { name: "Michael Rich, M.D.", title: "Cardiology, Boise, ID" },
    { name : "Kyle Roseberry, MD.", title: "Psychiatrist, VA"},
    { name: "Mark Radel, Psy.D.", title: "Psychologist, LifeSpan Counseling & Psychological Services, Oak Park, IL" },
    { name: "Carolyn Sherer, Psy.D.", title: "Clinical Neuropsychologist, National Institute of Health, Washington, DC" },
    { name: "Kanwaldeep S. Sidhu, M.D.", title: "Attending Psychiatrist, Community North Hospital" },
    { name: "Ganesh Shankar", title: "Pervasive Technology Institute" },
    { name: "Eddie Stage, Ph.D.", title: "Researcher, Department of Medical Neuroscience, IU School of Medicine" },
    { name: "Jiahuai Tan, M.D.", title: "Hematologist & Oncologist, North Mississippi Medical Center Cancer Care" },
    { name: "Jeffery M. Vergo, Psy.D.", title: "Clinical Psychologist, Chicago, IL" },
    { name: "Nabeel T. Yehyawi, Psy.D.", title: "Clinical Psychologist, Memphis, TN" },
  ];
  

  return (
    <Container>
      {/* Current Members Section */}
      <Section>
        <Title>Current Members</Title>
        {currentMembers.map((member, index) => (
          <MemberCard key={index}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberTitle>{member.title}</MemberTitle>
            </MemberInfo>
          </MemberCard>
        ))}
      </Section>

      {/* Alumni Section */}
      <Section>
        <Title>Alumni</Title>
        <AlumniList>
          {alumni.map((alum, index) => (
            <AlumniItem key={index}>{alum.name},{alum.title}</AlumniItem>
          ))}
        </AlumniList>
      </Section>
    </Container>
  );
}

export default LabMembers;
