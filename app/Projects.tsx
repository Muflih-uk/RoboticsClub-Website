"use client"
import React from 'react';
import styles from "@/styles/ProjectShowcase.module.css"
import Image from 'next/image';

const projects = [
  { id: 1, image: '/1.png', description: 'Autonomous Rover: A robot that navigates obstacles.' },
  { id: 2, image: '/2.png', description: 'Robotic Arm: Precision control for automation.' },
  { id: 3, image: '/3.png', description: 'Line Follower: Tracks paths with sensors.' },
];

const ProjectShowcase = () => {
  return (
    <section className='flex flex-cols h-screen items-center justify-center'>
        <h1 className='text-[30px]'>PROJECTS</h1>
      <div className={`${styles.images}`}>
        {projects.map((project) => (
          <div key={project.id} className={`${styles.imageCard}`}>
            <div className={styles.cardInner}>
              <div className={styles.front}>
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  height={400}
                  width={400}
                  className="w-full h-full object-cover rounded-[30px]"
                />
              </div>
              <div className={styles.back}>
                <p className="text-center text-white p-4">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
