import React, { Children } from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import ReactLoading from 'react-loading';

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
            <div className="relative h-auto max-w-2xl w-[570px]">
              
                <span class="visually-hidden">
                  <FadeIn>
                    <Image
                      src={Coffee}
                      alt="Coffee"
                      height={400}
                      width={400}
                      quality={100}
                      className="rounded-full"
                    />
                  </FadeIn>
                </span>
              
            </div>
          </div>
        ) : (
          <div className="items-center flex h-[100vh] left-0 justify-center fixed top-0 w-[100%] z-[1000]">
            <div className="relative text-2xl h-auto max-w-2xl w-[560px]">
              <div className="text-2xl tracking-wider h-20 w-[100%] text-gray-600 dark:text-gray-400 ">
                <Typewriter
                  options={{
                    strings: [
                      'Welcome!',
                      'Click the button to start',
                      'Learn about me under the About-Tab',
                      'Checkout my Dashboard for projects',
                      'Find cool & helpful snippets',
                      'This is Built with Next.js & Sanity',
                      'I love to code.'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                    cursor: '<',
                    delay: 100
                  }}
                />
              </div>
              <div className="absolute top-50  text-sm h-auto max-w-xl w-[560px] text-gray-600 dark:text-gray-400 ">
                <button className="items-center bg-white rounded-3xl text-black tracking-wider flex font-black font-mono justify-center px-4 uppercase py-1 mt-6 m-auto cursor-pointer">
                  <Link href="/home"> Enter Here </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
