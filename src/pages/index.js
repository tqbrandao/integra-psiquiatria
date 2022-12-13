import React from "react";
import Layout from "../components/Layout";
import * as classes from "../styles/Home.module.css";
import heroImg from "../assets/hero-transparent.png";

export default function Home() {
  return (
    <Layout>
      <main>
        <section className={classes.sectionHero}>
          <div className={classes.hero}>
            <div className={classes.heroText}>
              <h1 className={classes.heroHeading}>
                Dr. Thiago Queiroz Brandão
              </h1>
              <p className={classes.heroDescription}>
                Atendimentos em Psiquiatria em São José do Rio Preto – SP.
                Médico pela Universidade Federal de Uberlândia e Psiquiatra pela
                Universidade Federal de Goiás.
                <p className={classes.heroDescription}>
                  CRM SP 221494 / RQE 92504
                </p>
              </p>
            </div>
            <div className={classes.heroImgBox}>
              <img
                src={heroImg}
                alt="Foto do Dr. Thiago"
                className={classes.heroImg}
              ></img>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
