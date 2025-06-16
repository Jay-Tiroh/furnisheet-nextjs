import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="space-y-20 w-full">
      {/* Hero Section */}
      <div className="hero-section w-full">
        <div
          className="content flex flex-col items-center
      md:items-start md:justify-center md:flex-row-reverse  "
        >
          <div className="w-full md:w-8/12 xl:w-10/12 relative mb-5 ">
            <AspectRatio ratio={16 / 11} className="min-h-[200px]">
              {" "}
              <Image
                quality={100}
                width={1200}
                height={675}
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 66vw"
                src="/assets/images/hero-img.png"
                alt=""
                className="w-full object-cover"
              />
            </AspectRatio>
            <Image
              width={120}
              height={120}
              src="/assets/images/need-help.png"
              alt=""
              className="absolute bottom-10 right-10"
            />
          </div>
          <div className="hero-details flex flex-col items-center md:items-start md:w-2/5 px-7 md:space-y-5 md:mt-10 lg:mt-20 ">
            <div className="hero-text text-3xl  flex gap-5 justify-center mt-3 md:flex-col md:items-start md:text-5xl lg:text-7xl">
              <span>Rent,</span> <span>Furnish,</span> <span>Live.</span>
            </div>
            <Button
              text="Explore Furniture"
              className="home-btn"
              href="/furniture"
            />
          </div>
        </div>
      </div>

      {/* How It Works */}

      <div
        id="how-it-works"
        className="px-10 text-very-dark-blue space-x-3 flex-col justify-evenly flex items-start md:flex-row md:justify-between md:items-stretch  space-y-10 md:space-y-0"
      >
        <span className="h2 font-semibold md:text-2xl mx-auto md:mx-0 text-wrap flex  items-start py-5  md:max-w-32  text-3xl">
          How It Works
        </span>

        {/* processes */}
        <div className="container md:flex-row md:justify-between md:items-stretch flex flex-col justify-evenly items-center space-y-10 md:space-y-3 md:space-x-5 ">
          <div className="process">
            <span className="svg">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 48H3.99999C2.93945 47.9989 1.92265 47.5771 1.17274 46.8272C0.422825 46.0773 0.00105895 45.0605 0 44V36H3.99999V44H12V48Z"
                  fill="#FC8510"
                />
                <path
                  d="M0 19.9998H3.99999V27.9998H0V19.9998Z"
                  fill="#FC8510"
                />
                <path
                  d="M48 12H44V3.99999H36V0H44C45.0605 0.00105895 46.0773 0.422825 46.8272 1.17274C47.5771 1.92265 47.9989 2.93945 48 3.99999V12Z"
                  fill="#FC8510"
                />
                <path d="M20 0H28V3.99999H20V0Z" fill="#FC8510" />
                <path
                  d="M3.99999 12H0V3.99999C0.00105895 2.93945 0.422825 1.92265 1.17274 1.17274C1.92265 0.422825 2.93945 0.00105895 3.99999 0H12V3.99999H3.99999V12Z"
                  fill="#FC8510"
                />
                <path
                  d="M50.0001 59.9999C49.7374 60.0001 49.4773 59.9485 49.2346 59.8479C48.992 59.7474 48.7716 59.5999 48.5861 59.4139L36.3101 47.1379L29.6641 57.1099C29.4535 57.4257 29.1574 57.6751 28.8103 57.8289C28.4632 57.9827 28.0795 58.0345 27.704 57.9783C27.3286 57.9221 26.9769 57.7601 26.69 57.5115C26.4032 57.2628 26.193 56.9376 26.0842 56.5739L14.0842 16.574C13.9805 16.2282 13.9724 15.8607 14.0607 15.5106C14.1491 15.1605 14.3305 14.8409 14.5858 14.5856C14.8411 14.3303 15.1607 14.1489 15.5108 14.0606C15.8609 13.9723 16.2283 13.9804 16.5742 14.084L56.5741 26.084C56.9378 26.1928 57.2629 26.403 57.5116 26.6898C57.7603 26.9767 57.9222 27.3284 57.9785 27.7038C58.0347 28.0793 57.9829 28.463 57.8291 28.8101C57.6753 29.1572 57.4259 29.4534 57.1101 29.664L47.1381 36.3099L59.414 48.5859C59.789 48.961 59.9996 49.4696 59.9996 49.9999C59.9996 50.5302 59.789 51.0388 59.414 51.4139L51.4141 59.4139C51.2286 59.5999 51.0082 59.7474 50.7655 59.8479C50.5229 59.9485 50.2627 60.0001 50.0001 59.9999ZM50.0001 55.1719L55.1721 49.9999L40.8621 35.6899L51.3541 28.694L18.9842 18.984L28.6941 51.3539L35.6901 40.8619L50.0001 55.1719Z"
                  fill="#FC8510"
                />
              </svg>
            </span>
            <div className="text">Select Preferred Package Or Item</div>
          </div>
          {/* arrow */}
          <div className="arrow">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5C0 7.21589 0.112862 6.94342 0.313758 6.74252C0.514653 6.54163 0.787126 6.42876 1.07124 6.42876H13.4826L8.88268 1.83102C8.78308 1.73142 8.70408 1.61318 8.65017 1.48305C8.59627 1.35292 8.56853 1.21344 8.56853 1.07259C8.56853 0.931733 8.59627 0.792257 8.65017 0.662126C8.70408 0.531993 8.78308 0.413752 8.88268 0.314153C8.98228 0.214554 9.10052 0.135548 9.23065 0.081645C9.36079 0.0277424 9.50026 0 9.64112 0C9.78197 0 9.92145 0.0277424 10.0516 0.081645C10.1817 0.135548 10.3 0.214554 10.3996 0.314153L16.827 6.74156C16.9267 6.84107 17.0059 6.95929 17.0599 7.08943C17.1139 7.21958 17.1417 7.35909 17.1417 7.5C17.1417 7.6409 17.1139 7.78042 17.0599 7.91057C17.0059 8.04071 16.9267 8.15893 16.827 8.25843L10.3996 14.6858C10.3 14.7854 10.1817 14.8645 10.0516 14.9184C9.92145 14.9723 9.78197 15 9.64112 15C9.50026 15 9.36079 14.9723 9.23065 14.9184C9.10052 14.8645 8.98228 14.7854 8.88268 14.6858C8.68153 14.4847 8.56853 14.2119 8.56853 13.9274C8.56853 13.7866 8.59627 13.6471 8.65017 13.5169C8.70408 13.3868 8.78308 13.2686 8.88268 13.169L13.4826 8.57123H1.07124C0.787126 8.57123 0.514653 8.45837 0.313758 8.25748C0.112862 8.05658 0 7.78411 0 7.5Z"
                fill="#13293D"
              />
            </svg>
          </div>

          <div className="process">
            <span className="svg ">
              <svg
                width="60"
                height="43"
                viewBox="0 0 60 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.25 28.4998C40.6533 28.4998 40.081 28.7368 39.659 29.1588C39.2371 29.5807 39 30.153 39 30.7498C39 31.3465 39.2371 31.9188 39.659 32.3407C40.081 32.7627 40.6533 32.9998 41.25 32.9998H48.75C49.3467 32.9998 49.919 32.7627 50.341 32.3407C50.7629 31.9188 51 31.3465 51 30.7498C51 30.153 50.7629 29.5807 50.341 29.1588C49.919 28.7368 49.3467 28.4998 48.75 28.4998H41.25Z"
                  fill="#FC8510"
                />
                <path
                  d="M6.875 0C5.05164 0 3.30295 0.724328 2.01364 2.01364C0.724328 3.30295 0 5.05164 0 6.875V35.625C0 37.4484 0.724328 39.197 2.01364 40.4864C3.30295 41.7757 5.05164 42.5 6.875 42.5H53.125C54.9484 42.5 56.697 41.7757 57.9864 40.4864C59.2757 39.197 60 37.4484 60 35.625V6.875C60 5.05164 59.2757 3.30295 57.9864 2.01364C56.697 0.724328 54.9484 0 53.125 0H6.875ZM3.75 35.625V16.25H56.25V35.625C56.25 37.35 54.85 38.75 53.125 38.75H6.875C5.15 38.75 3.75 37.35 3.75 35.625ZM3.75 12.5V6.875C3.75 5.15 5.15 3.75 6.875 3.75H53.125C54.85 3.75 56.25 5.15 56.25 6.875V12.5H3.75Z"
                  fill="#FC8510"
                />
              </svg>
            </span>
            <div className="text">Make Payment</div>
          </div>
          {/* arrow */}
          <div className="arrow">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5C0 7.21589 0.112862 6.94342 0.313758 6.74252C0.514653 6.54163 0.787126 6.42876 1.07124 6.42876H13.4826L8.88268 1.83102C8.78308 1.73142 8.70408 1.61318 8.65017 1.48305C8.59627 1.35292 8.56853 1.21344 8.56853 1.07259C8.56853 0.931733 8.59627 0.792257 8.65017 0.662126C8.70408 0.531993 8.78308 0.413752 8.88268 0.314153C8.98228 0.214554 9.10052 0.135548 9.23065 0.081645C9.36079 0.0277424 9.50026 0 9.64112 0C9.78197 0 9.92145 0.0277424 10.0516 0.081645C10.1817 0.135548 10.3 0.214554 10.3996 0.314153L16.827 6.74156C16.9267 6.84107 17.0059 6.95929 17.0599 7.08943C17.1139 7.21958 17.1417 7.35909 17.1417 7.5C17.1417 7.6409 17.1139 7.78042 17.0599 7.91057C17.0059 8.04071 16.9267 8.15893 16.827 8.25843L10.3996 14.6858C10.3 14.7854 10.1817 14.8645 10.0516 14.9184C9.92145 14.9723 9.78197 15 9.64112 15C9.50026 15 9.36079 14.9723 9.23065 14.9184C9.10052 14.8645 8.98228 14.7854 8.88268 14.6858C8.68153 14.4847 8.56853 14.2119 8.56853 13.9274C8.56853 13.7866 8.59627 13.6471 8.65017 13.5169C8.70408 13.3868 8.78308 13.2686 8.88268 13.169L13.4826 8.57123H1.07124C0.787126 8.57123 0.514653 8.45837 0.313758 8.25748C0.112862 8.05658 0 7.78411 0 7.5Z"
                fill="#13293D"
              />
            </svg>
          </div>
          <div className="process">
            <span className="svg">
              <svg
                width="60"
                height="56"
                viewBox="0 0 60 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.8903 12.051L37.4619 0.265346C37.1454 0.0912751 36.7902 0 36.429 0C36.0679 0 35.7126 0.0912751 35.3962 0.265346L13.9677 12.051C13.6318 12.236 13.3516 12.5077 13.1565 12.8379C12.9613 13.1681 12.8584 13.5446 12.8584 13.9281C12.8584 14.3116 12.9613 14.6881 13.1565 15.0183C13.3516 15.3485 13.6318 15.6203 13.9677 15.8052L34.2862 26.9802V49.9493L27.7805 46.3708L25.7148 50.1229L35.3962 55.4478C35.7125 55.6223 36.0678 55.7138 36.429 55.7138C36.7902 55.7138 37.1456 55.6223 37.4619 55.4478L58.8903 43.6622C59.2264 43.4773 59.5067 43.2056 59.7019 42.8754C59.8972 42.5452 60.0002 42.1687 60.0003 41.7851V13.9281C60.0002 13.5445 59.8972 13.168 59.7019 12.8378C59.5067 12.5076 59.2264 12.2359 58.8903 12.051ZM36.429 4.5896L53.411 13.9281L36.429 23.2666L19.447 13.9281L36.429 4.5896ZM55.7146 40.5187L38.5719 49.9472V26.978L55.7146 17.5495V40.5187Z"
                  fill="#FC8510"
                />
                <path
                  d="M17.1427 27.857H0V23.5713H17.1427V27.857Z"
                  fill="#FC8510"
                />
                <path
                  d="M21.4289 44.9997H4.28613V40.7141H21.4289V44.9997Z"
                  fill="#FC8510"
                />
                <path
                  d="M25.714 36.4283H8.57129V32.1426H25.714V36.4283Z"
                  fill="#FC8510"
                />
              </svg>
            </span>
            <div className="text">
              Order Is Delivered And Assembled By Furnisheet Agents
            </div>
          </div>
          {/* arrow */}
          <div className="arrow">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5C0 7.21589 0.112862 6.94342 0.313758 6.74252C0.514653 6.54163 0.787126 6.42876 1.07124 6.42876H13.4826L8.88268 1.83102C8.78308 1.73142 8.70408 1.61318 8.65017 1.48305C8.59627 1.35292 8.56853 1.21344 8.56853 1.07259C8.56853 0.931733 8.59627 0.792257 8.65017 0.662126C8.70408 0.531993 8.78308 0.413752 8.88268 0.314153C8.98228 0.214554 9.10052 0.135548 9.23065 0.081645C9.36079 0.0277424 9.50026 0 9.64112 0C9.78197 0 9.92145 0.0277424 10.0516 0.081645C10.1817 0.135548 10.3 0.214554 10.3996 0.314153L16.827 6.74156C16.9267 6.84107 17.0059 6.95929 17.0599 7.08943C17.1139 7.21958 17.1417 7.35909 17.1417 7.5C17.1417 7.6409 17.1139 7.78042 17.0599 7.91057C17.0059 8.04071 16.9267 8.15893 16.827 8.25843L10.3996 14.6858C10.3 14.7854 10.1817 14.8645 10.0516 14.9184C9.92145 14.9723 9.78197 15 9.64112 15C9.50026 15 9.36079 14.9723 9.23065 14.9184C9.10052 14.8645 8.98228 14.7854 8.88268 14.6858C8.68153 14.4847 8.56853 14.2119 8.56853 13.9274C8.56853 13.7866 8.59627 13.6471 8.65017 13.5169C8.70408 13.3868 8.78308 13.2686 8.88268 13.169L13.4826 8.57123H1.07124C0.787126 8.57123 0.514653 8.45837 0.313758 8.25748C0.112862 8.05658 0 7.78411 0 7.5Z"
                fill="#13293D"
              />
            </svg>
          </div>
          <div className="process">
            <span className="svg">
              <svg
                width="49"
                height="60"
                viewBox="0 0 49 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.1875 1.75H4.8125C3.2592 1.75 2 3.0092 2 4.5625V55.1875C2 56.7408 3.2592 58 4.8125 58H44.1875C45.7408 58 47 56.7408 47 55.1875V4.5625C47 3.0092 45.7408 1.75 44.1875 1.75Z"
                  stroke="#FC8510"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.25 1.75H25.9062V24.25L19.5781 18.625L13.25 24.25V1.75Z"
                  stroke="#FC8510"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.25 35.5H27.3125"
                  stroke="#FC8510"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13.25 43.9375H35.75"
                  stroke="#FC8510"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div className="text">Sign Rental Agreement</div>
          </div>
          {/* arrow */}
          <div className="arrow">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5C0 7.21589 0.112862 6.94342 0.313758 6.74252C0.514653 6.54163 0.787126 6.42876 1.07124 6.42876H13.4826L8.88268 1.83102C8.78308 1.73142 8.70408 1.61318 8.65017 1.48305C8.59627 1.35292 8.56853 1.21344 8.56853 1.07259C8.56853 0.931733 8.59627 0.792257 8.65017 0.662126C8.70408 0.531993 8.78308 0.413752 8.88268 0.314153C8.98228 0.214554 9.10052 0.135548 9.23065 0.081645C9.36079 0.0277424 9.50026 0 9.64112 0C9.78197 0 9.92145 0.0277424 10.0516 0.081645C10.1817 0.135548 10.3 0.214554 10.3996 0.314153L16.827 6.74156C16.9267 6.84107 17.0059 6.95929 17.0599 7.08943C17.1139 7.21958 17.1417 7.35909 17.1417 7.5C17.1417 7.6409 17.1139 7.78042 17.0599 7.91057C17.0059 8.04071 16.9267 8.15893 16.827 8.25843L10.3996 14.6858C10.3 14.7854 10.1817 14.8645 10.0516 14.9184C9.92145 14.9723 9.78197 15 9.64112 15C9.50026 15 9.36079 14.9723 9.23065 14.9184C9.10052 14.8645 8.98228 14.7854 8.88268 14.6858C8.68153 14.4847 8.56853 14.2119 8.56853 13.9274C8.56853 13.7866 8.59627 13.6471 8.65017 13.5169C8.70408 13.3868 8.78308 13.2686 8.88268 13.169L13.4826 8.57123H1.07124C0.787126 8.57123 0.514653 8.45837 0.313758 8.25748C0.112862 8.05658 0 7.78411 0 7.5Z"
                fill="#13293D"
              />
            </svg>
          </div>
          <div className="process">
            <span className="svg">
              <svg
                width="60"
                height="48"
                viewBox="0 0 60 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.28613 21.4287H30.0006V25.7144H4.28613V21.4287Z"
                  fill="#FC8510"
                />
                <path
                  d="M0 10.7144H21.4287V15.0001H0V10.7144Z"
                  fill="#FC8510"
                />
                <path
                  d="M59.8267 22.7273L53.3981 7.72718C53.2332 7.34164 52.9586 7.01304 52.6085 6.78218C52.2584 6.55132 51.8482 6.42838 51.4288 6.42861H45.0002V2.14287C45.0002 1.57454 44.7745 1.0295 44.3726 0.627632C43.9707 0.225766 43.4257 0 42.8574 0H8.57146V4.28574H40.7145V31.1916C39.7381 31.7586 38.8835 32.5133 38.2002 33.4121C37.5168 34.311 37.0182 35.3363 36.733 36.4288H23.2673C22.7457 34.4088 21.5053 32.6483 19.7786 31.4775C18.052 30.3066 15.9575 29.8056 13.8879 30.0685C11.8183 30.3314 9.91561 31.34 8.53648 32.9054C7.15736 34.4708 6.39648 36.4854 6.39648 38.5716C6.39648 40.6579 7.15736 42.6725 8.53648 44.2379C9.91561 45.8033 11.8183 46.8119 13.8879 47.0748C15.9575 47.3377 18.052 46.8367 19.7786 45.6658C21.5053 44.4949 22.7457 42.7345 23.2673 40.7145H36.733C37.1992 42.5536 38.2653 44.1847 39.7626 45.3499C41.2599 46.515 43.103 47.1477 45.0002 47.1477C46.8975 47.1477 48.7406 46.515 50.2379 45.3499C51.7352 44.1847 52.8013 42.5536 53.2674 40.7145H57.8574C58.4258 40.7145 58.9708 40.4887 59.3727 40.0869C59.7745 39.685 60.0003 39.14 60.0003 38.5716V23.5716C60.0004 23.2813 59.9414 22.994 59.8267 22.7273ZM15.0001 42.8574C14.1524 42.8574 13.3238 42.606 12.619 42.1351C11.9143 41.6642 11.3649 40.9948 11.0406 40.2117C10.7162 39.4286 10.6313 38.5669 10.7967 37.7355C10.962 36.9042 11.3702 36.1405 11.9696 35.5412C12.569 34.9418 13.3326 34.5336 14.164 34.3682C14.9953 34.2029 15.857 34.2878 16.6401 34.6121C17.4233 34.9365 18.0926 35.4858 18.5635 36.1906C19.0344 36.8954 19.2858 37.724 19.2858 38.5716C19.2847 39.7079 18.8328 40.7974 18.0293 41.6009C17.2258 42.4043 16.1364 42.8562 15.0001 42.8574ZM45.0002 10.7143H50.0145L54.6088 21.4287H45.0002V10.7143ZM45.0002 42.8574C44.1526 42.8574 43.324 42.606 42.6192 42.1351C41.9144 41.6642 41.3651 40.9948 41.0407 40.2117C40.7163 39.4286 40.6315 38.5669 40.7968 37.7355C40.9622 36.9042 41.3704 36.1405 41.9698 35.5412C42.5691 34.9418 43.3328 34.5336 44.1641 34.3682C44.9955 34.2029 45.8572 34.2878 46.6403 34.6121C47.4234 34.9365 48.0928 35.4858 48.5637 36.1906C49.0346 36.8954 49.286 37.724 49.286 38.5716C49.2848 39.7079 48.8329 40.7974 48.0294 41.6009C47.226 42.4043 46.1365 42.8562 45.0002 42.8574ZM55.7146 36.4288H53.2674C52.7954 34.5933 51.7276 32.9663 50.2315 31.8029C48.7354 30.6395 46.8955 30.0054 45.0002 30.0002V25.7144H55.7146V36.4288Z"
                  fill="#FC8510"
                />
              </svg>
            </span>
            <div className="text">
              Agent Picks Furniture Up At The End Of The Rental Period
            </div>
          </div>
        </div>
      </div>
      {/* Stop Spending*/}
      <div className="bg-very-dark-blue text-light-grey pb-10 md:p-10 md:relative min-h-[22rem]">
        <div className="content flex-col md:flex-row md:items-stretch  justify-center md:absolute left-20 -bottom-10 flex">
          <div className="spending-img  min-h-80 overflow-hidden w-full md:w-80 md:max-w-[25rem]">
            h
          </div>
          <div className="text-content mx-10 md:w-1/3  left-6/11 xl:left-4/9 mt-10 md:mt-0 bottom-5 flex flex-col md:justify-center">
            <h2 className="text-2xl font-medium mb-3 leading-[1.8rem] text-wrap text-center md:text-left">
              Stop spending a fortune upfront
            </h2>
            <p className="text-sm text-center md:text-left ">
              It costs $6,000 on average to furnish a one-bedroom with quality
              furniture. With Furnisheet, you can rent items starting at
              N1,200/mo, and our team handles everything you’d rather not:
              delivery, assembly, & pickup.
            </p>

            <Button
              text="See All Furniture"
              className="home-btn max-w-52 m-auto md:m-0 md:mb-10 xl:m-0"
              href="/furniture"
            />
          </div>
        </div>
      </div>

      {/* Packages */}

      <div className="packages-section flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-semibold text-center">Our Packages</h2>
        <div className="packages w-full ">
          <div className="container w-full p-5 text-center flex justify-evenly gap-5 m-auto flex-wrap md:flex-nowrap">
            {/* packages */}
            <div className="package flex flex-col justify-center ">
              <Image
                width={200}
                height={200}
                src="/assets/images/2-bedroom.png?url"
                alt=""
                className="package-img"
              />

              <span className="package-name font-semibold text-xl mt-2">
                2 - Bedroom Package
              </span>
            </div>
            <div className="package flex flex-col justify-center ">
              <Image
                width={200}
                height={200}
                src="/assets/images/3-bedroom.png?url"
                alt=""
                className="package-img"
              />
              <span className="package-name font-semibold text-xl mt-2">
                3 - Bedroom Package
              </span>
            </div>
            <div className="package flex flex-col justify-center ">
              <Image
                width={200}
                height={200}
                src="/assets/images/self-con.png?url"
                alt=""
                className="package-img"
              />
              <span className="package-name font-semibold text-xl mt-2">
                Self - Contain Package
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Best Selling  */}

      <div className="p-10 space-y-10 ">
        <h2 className="font-semibold text-3xl text-center">
          Best Selling Products
        </h2>
        <div className="container m-auto  gap-10 mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center md:grid-flow-row ">
          {/* items */}
          <div className="item  ">
            <Image
              width={200}
              height={200}
              src="/assets/images/swivel-chair.png?url"
              alt=""
            />
            <div className="name mt-1">Ergonomic And Swivel Chairs (ESC)</div>
            <div className="price">
              <span className="font-semibold subscription">N1,500/mo</span>{" "}
              &nbsp; N12,000 to buy
            </div>
          </div>

          <div className="item ">
            <Image
              width={200}
              height={200}
              src="/assets/images/chair1.png?url"
              alt=""
            />
            <div className="name mt-1">Comfy Couch, Grey Left Extended</div>
            <div className="price">
              <span className="font-semibold subscription">N1,500/mo</span>{" "}
              &nbsp; N12,000 to buy
            </div>
          </div>

          <div className="item ">
            <Image
              width={200}
              height={200}
              src="/assets/images/chair2.png?url"
              alt=""
            />
            <div className="name mt-1">Comfy Couch, Grey Left Extended</div>
            <div className="price">
              <span className="font-semibold subscription">N1,500/mo</span>{" "}
              &nbsp; N12,000 to buy
            </div>
          </div>

          <div className="item">
            <Image
              src="/assets/images/chair3.png?url"
              alt=""
              width={200}
              height={200}
            />
            <div className="name mt-1">Comfy Couch, Grey Left Extended</div>
            <div className="price">
              <span className="font-semibold subscription">N1,500/mo</span>{" "}
              &nbsp; N12,000 to buy
            </div>
          </div>
        </div>

        <Button
          text="Shop All Furniture"
          className="home-btn text-nowrap max-w-54 m-auto"
          href="/furniture"
        />
      </div>

      {/* Enjoy Rent */}

      <div className="bg-very-dark-blue text-light-grey pb-10 md:p-auto md:relative min-h-[22rem] overflow-x-clip">
        <div className="content flex-col md:flex-row md:items-stretch  justify-center md:absolute left-20 -bottom-10 flex w-full ">
          <div className="spending-img  min-h-80 overflow-hidden w-full md:w-80 md:max-w-[25rem]"></div>
          <div className="text-content mx-10 md:w-1/3  left-6/11 xl:left-4/9 mt-10 md:mt-0 bottom-5 flex flex-col md:justify-center">
            <h2 className="text-2xl font-medium mb-3 leading-[1.8rem] text-wrap text-center md:text-left">
              Enjoy rent-to-own flexibility
            </h2>
            <p className="text-sm text-center md:text-left ">
              Fall in love with something? Buy it out and make it your own! All
              monthly payments go toward ownership.
            </p>

            <Button
              text="See All Furniture"
              className="home-btn max-w-52 m-auto md:m-0 md:mb-10 xl:m-0"
              href="/furniture"
            />
          </div>
        </div>
      </div>

      {/* Now Available */}

      <div className="bg-very-dark-blue text-light-grey pb-10 md:p-10 md:relative min-h-[22rem]">
        <div className="content flex-col md:flex-row-reverse md:items-stretch  justify-center md:absolute left-20 -bottom-10 flex">
          <div className="bridge-img  min-h-80 overflow-hidden w-full md:w-80 md:max-w-[25rem]"></div>
          <div className="text-content mx-10 md:w-1/3  left-6/11 xl:left-4/9 mt-10 md:mt-0 bottom-5 flex flex-col md:justify-center">
            <h2 className="text-2xl font-medium mb-3 leading-[1.8rem] text-wrap text-center md:text-left">
              Furnisheet is now available in Lagos!
            </h2>
            <p className="text-sm text-center md:text-left ">
              We added new zip codes to our furniture delivery zones across
              Dallas/Fort Worth, Houston, San Antonio, and Austin….let’s get
              this party started.
            </p>

            <Button
              text="See All Furniture"
              className="home-btn max-w-52 m-auto md:m-0 md:mb-10 xl:m-0"
              href="/furniture"
            />
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <Testimonials />
      {/* FAQ */}
      <FAQ />
    </div>
  );
}
