import React, { Children } from 'react';
import FadeIn from 'react-fade-in';

import Coffee from '../public/static/images/Coffee.Gif';

import Image from 'next/image';

import Link from 'next/link';
import Typewriter from 'typewriter-effect';

//Use Default Options when using a Lottie Json file
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Coffee.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: undefined,
      done: undefined
    };
  }
  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 1200);
  }
  render() {
    return (
      <div>
        {!this.state.done ? (
          <div className="items-center flex h-[100%] left-0 right-0 justify-center fixed top-0 w-[100%]">
            <div className="relative h-auto max-w-2xl w-[560px]">
              <span className="visually-hidden">
                <FadeIn>
                  <Image
                    src={Coffee}
                    alt="Coffee"
                    height={400}
                    width={400}
                    quality={100}
                    priority
                    className="rounded-full"
                  />
                </FadeIn>
              </span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
