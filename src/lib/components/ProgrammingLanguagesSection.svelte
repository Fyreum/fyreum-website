<script lang="ts">
    import { onMount } from "svelte";
    import php from "$lib/images/favicons/php.png";
    import phpPreview from "$lib/images/todo_dark.png";
    import java from "$lib/images/favicons/java.png";
    import javascript from "$lib/images/favicons/javascript.png";
    import javascriptPreview from "$lib/images/region-viewer.png";
    import svelte from "$lib/images/favicons/svelte.png";
    import nwPreview from "$lib/images/nw-website.png";
    import erethonFavicon from "$lib/images/favicons/erethon.ico";
    import erethonPreview from "$lib/images/erethon-preview.png";

    let languages = [
        {
            name: "JS/TypeScript",
            href: "",
            image: javascript,
            previewImage: javascriptPreview,
            previewName: "Factions Region Viewer",
            previewDesc: "A web application to view the regions of a Minecraft factions server. The regions are displayed on a map and can be filtered by their properties. Regions can be edited through brushes and tools.",
            color: "#f7df1e",
            langColor: "#f7df1e",
        },
        {
            name: "Java",
            href: "https://erethon.de",
            image: java,
            previewImage: erethonPreview,
            previewName: "Erethon Server",
            previewDesc: "A medieval themed Minecraft server with custom server plugins and an unique world. The server is still in development and will be released soon.",
            color: "#007396",
            langColor: "#007396",
        },
        {
            name: "PHP",
            href: "",
            image: php,
            previewImage: phpPreview,
            previewName: "ToDo-App in the Browser",
            previewDesc: "The classic: A simple ToDo-App with a dark theme and a minimalistic design. The app is built with PHP/JavaScript and stores the tasks in the browser.",
            color: "#777bb4",
            langColor: "#777bb4",
            padding: "0.5rem",
        },
        {
            name: "Svelte",
            href: "https://niclaswittenburg.de",
            image: svelte,
            previewImage: nwPreview,
            previewName: "Portfolio Website",
            previewDesc: "A minimalistic portfolio website with a light theme and round design elements. Built to showcase a resumé and recommendations.",
            color: "#ff3e00",
            langColor: "#ff3e00",
        },
    ];
    let currentLanguage = 0;
    let currentLanguageFixed = 0;
    let languageDetails: HTMLDivElement;
    let previewSrc: string = languages[1].previewImage;

    let setCurrentLanguageTo: (i: number) => void;

    onMount(() => {
        const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const carouselChildrens = [...carousel.children];

        const detailsAnimation = languageDetails.animate(
            [{ opacity: 1 }, { opacity: 0 }, { opacity: 0 }, { opacity: 1 }],
            {
                duration: 300,
            },
        );

        let isDragging = false,
            isAutoPlay = true,
            autoplayInterval = 7000,
            startX: number,
            startScrollLeft: number,
            timeoutId: number;

        // Get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        document.querySelectorAll(".carousel .card").forEach((card) => {
            card.firstChild.style.setProperty('--language-color', languages[parseInt(card.id.split("-")[1])].color);
        });

        // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Add event listeners for the arrow buttons to scroll the carousel left and right
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
                setCurrentLanguage(mod(btn.id == "left" ? currentLanguage - 1 : currentLanguage + 1, languages.length));
            });
        });

        const dragStart = (e: DragEvent) => {
            if (isDragging) return; // if isDragging is true return from here

            isDragging = true;
            carousel.classList.add("dragging");
            // Records the initial cursor and scroll position of the carousel
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e: DragEvent) => {
            if (!isDragging) return; // if isDragging is false return from here
            // Updates the scroll position of the carousel based on the cursor movement
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            if (!isDragging) {
                return
            }
            isDragging = false;
            carousel.classList.remove("dragging");
            calculateAndSetCurrentLanguage();
        }

        const infiniteScroll = () => {
            // If the carousel is at the beginning, scroll to the end
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }
            // If the carousel is at the end, scroll to the beginning
            else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            // Clear existing timeout & start autoplay if mouse is not hovering over carousel
            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        }

        const setCurrentLanguage = (language: number, updateImageSrc: boolean = true) => {
            currentLanguage = language;
            currentLanguageFixed = modL(cardPerView > 1 ? language + 1 : language);
            highlightCurrentLanguage();

            if (updateImageSrc) {
                animateLanguagePreview();
            }
        }

        const highlightCurrentLanguage = () => {
            document.querySelectorAll(".carousel .card").forEach((card) => {
                let i = parseInt(card.id.split("-")[1]);
                card.classList.toggle('current', i === currentLanguageFixed);
            });
        }
        highlightCurrentLanguage();

        const calculateAndSetCurrentLanguage = () => {
            setCurrentLanguage(modL(Math.floor(carousel.scrollLeft / firstCardWidth) - languages.length + (cardPerView > 1 ? 1 : -1)));
        }

        const animateLanguagePreview = () => {
            detailsAnimation.play();
            setTimeout(() => {
                previewSrc = languages[currentLanguageFixed].previewImage;
            }, 150);
        }

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
            // Autoplay the carousel after every 2500 ms
            timeoutId = setTimeout(() => {
                carousel.scrollLeft += firstCardWidth;
                setCurrentLanguage(modL(currentLanguage + 1));
            }, autoplayInterval);
        }
        autoPlay();

        carousel.addEventListener("touchstart", dragStart);
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        document.addEventListener("touchend", dragStop);
        //carousel.addEventListener("scrollend", calculateAndSetCurrentLanguage);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);

        setCurrentLanguage(0);

        setCurrentLanguageTo = (language) => {
            if (currentLanguage < language) {
                carousel.scrollLeft += (language - currentLanguage) * firstCardWidth;
            } else {
                carousel.scrollLeft -= (currentLanguage - language) * firstCardWidth;
            }
            setCurrentLanguage(language);
        }
    });

    function modL(n: number) {
        return mod(n, languages.length);
    }

    function mod(n: number, m: number) {
        return ((n % m) + m) % m;
    }

</script>

<div class="w-full bg-black/50 border-t border-gray-600/60 px-4 overflow-hidden">
    <div class="text-center py-12 flex flex-col items-center gap-6">
        <h2 class="text-blue-100 text-4xl font-bold">
            Programming Languages
        </h2>
        <p class="text-slate-400 text-xl max-w-[40rem] px-4">
            These are the programming languages & frameworks I worked with over the years, paired with some example projects.
        </p>
    </div>
    <div class="relative max-content h-44 z-10">
        <div class="absolute top-0 left-0 dotted-background z-[-1] size-full fade-out-middle text-gray-600/60"></div>

        <div class="wrapper h-full z-10">
            <i id="left" class="fill-gray-400 p-1 z-20 hover:fill-blue-200 left-0 sm:left-[-22px]">
                <svg class="rotate-180 -translate-x-[5%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M517.85-480 354.92-642.92q-8.3-8.31-8.5-20.89-.19-12.57 8.5-21.27 8.7-8.69 21.08-8.69 12.38 0 21.08 8.69l179.77 179.77q5.61 5.62 7.92 11.85 2.31 6.23 2.31 13.46t-2.31 13.46q-2.31 6.23-7.92 11.85L397.08-274.92q-8.31 8.3-20.89 8.5-12.57.19-21.27-8.5-8.69-8.7-8.69-21.08 0-12.38 8.69-21.08L517.85-480Z"/></svg>
            </i>
            <ul class="carousel fade-out-sides">
                {#each languages as language, i}
                    <li id="language-{i}" class="card">
                        <img class="h-full aspect-square object-contain" src={language.image} alt="{language.name} Icon" draggable="false" style="padding: {language.padding}">
                    </li>
                {/each}
            </ul>
            <i id="right" class="fill-gray-400 p-1 z-20 hover:fill-blue-200 right-0 sm:right-[-22px]">
                <svg class="translate-x-[5%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M517.85-480 354.92-642.92q-8.3-8.31-8.5-20.89-.19-12.57 8.5-21.27 8.7-8.69 21.08-8.69 12.38 0 21.08 8.69l179.77 179.77q5.61 5.62 7.92 11.85 2.31 6.23 2.31 13.46t-2.31 13.46q-2.31 6.23-7.92 11.85L397.08-274.92q-8.31 8.3-20.89 8.5-12.57.19-21.27-8.5-8.69-8.7-8.69-21.08 0-12.38 8.69-21.08L517.85-480Z"/></svg>
            </i>
        </div>
    </div>

    <div class="max-content py-16 px-6 grid md:grid-cols-2 gap-6 md:gap-8 place-items-center">
        <img class="rounded-xl bg-slate-700 aspect-video w-full shadow-lg object-cover object-center"
             alt="ToDo-App" bind:this={languageDetails}
             src={previewSrc}
             style="box-shadow: 0 0 75px 0 {languages[currentLanguageFixed].color}44">

        <div class="flex flex-col items-center sm:block">
            <h3 class="flex flex-col sm:flex-row text-center sm:text-left items-center gap-3 sm:gap-2 text-2xl font-bold text-blue-100 mb-3 sm:mb-0">
                {languages[currentLanguageFixed].previewName}

                <span class="px-3 rounded-md text-base text-blue-100"
                      style="border: 2px solid {languages[currentLanguageFixed].langColor}; background-color: {languages[currentLanguageFixed].langColor}33">
                    {languages[currentLanguageFixed].name}
                </span>
            </h3>

            <p class="text-lg text-slate-400 mt-4">
                {languages[currentLanguageFixed].previewDesc}
            </p>

            {#if languages[currentLanguageFixed].href !== ''}
                <a class="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-neutral-800 mt-8 font-bold transition-all hover:brightness-[85%] unstyled-link"
                   href="{languages[currentLanguageFixed].href}">
                    Visit Project
                </a>
            {:else}
                <button class="bg-blue-100 rounded-full px-4 py-1.5 text-neutral-800 mt-8 font-bold transition-all hover:brightness-[85%] disabled:hover:brightness-100 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                    Coming soon
                </button>
            {/if}
        </div>
    </div>
    <div class="flex -translate-y-8 pb-8 gap-3 w-fit mx-auto">
        {#each languages as _, i}
            <button id="language-circle-{i}"
                    class="rounded-full size-2 cursor-pointer transition-all duration-300 {currentLanguage === i ? 'scale-125' : ''}"
                    style="background-color: {currentLanguage === i ? languages[currentLanguageFixed].color : 'rgb(71 85 105 / var(--tw-bg-opacity))'}"
                    on:click={() => setCurrentLanguageTo(i)}>
            </button>
        {/each}
    </div>
</div>