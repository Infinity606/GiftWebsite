import { useState } from 'react';
import Gift from './assets/gift.png';
import './App.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hangman from './hangman';


function App() {

  //animations for scrolling
  const ZoomInScrollOut = batch(FadeIn(), Move(), Sticky());
  const FadeUp = batch(Fade(), Move(), Sticky());


  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "40px" }}>HEY! 👋🏻</span>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <div style={{ marginBottom: "100px" }} >
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "40px" }}>Sooo ur present is a touch late... 😀</span>
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "40px" }}>BUT! I made this site for you to guess what I got you</span>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>Ready!?</Animator>
            <Animator animation={MoveIn(1000, 0)}>Were gonna playyyy</Animator>
            <Animator animation={MoveOut(1000, 0)}>HANGMAN</Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage>
        <Hangman />
      </ScrollPage>

    </ScrollContainer>
  );
}

export default App;