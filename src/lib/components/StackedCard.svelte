<script lang="ts">
    import { onMount } from 'svelte';
    import portrait from '$lib/images/portrait.jpeg';

    let card: HTMLDivElement;

    onMount(() => {
        document.addEventListener('mousemove', (e) => {
            if (!card) return;

            const x = e.clientX - card.getBoundingClientRect().left;
            const y = e.clientY - card.getBoundingClientRect().top;
            card.style.setProperty('--x', x + 'px');
            card.style.setProperty('--y', y + 'px');
        });
        /*card.addEventListener('mousemove', (e) => {
            let [x, y] = [e.clientX, e.clientY];
            let constrain = 150;

            let box = card.getBoundingClientRect();
            let calcX = -(y - box.y - (box.height / 2)) / constrain;
            let calcY = (x - box.x - (box.width / 2)) / constrain;

            card.style.transform = "perspective(100px) "
                + "   rotateX("+ calcX +"deg) "
                + "   rotateY("+ calcY +"deg) ";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "perspective(100px) rotateX(0deg) rotateY(0deg)";
        });*/
    });

</script>

<div class="relative mt-16 w-[60%] max-w-64 mx-auto sm:w-auto sm:max-w-auto sm:mx-6 md:mx-8 lg:mx-12">
    <div class="absolute top-0 left-1/2 -translate-y-[20%] -translate-x-1/2 aspect-square w-[95%] rounded-[18%] bg-slate-900 border-4 border-purple-600 -rotate-12"></div>
    <div class="absolute top-0 left-1/2 -translate-y-[10%] -translate-x-1/2 aspect-square w-[97.5%] rounded-[18%] bg-slate-800 border-4 border-blue-600 -rotate-3"></div>

    <div class="group relative p-1 z-10 transition-transform ease-linear bg-gray-700 rounded-[18%] aspect-square overflow-hidden before:absolute before:content-[''] before:z-[-1] before:text-blue-600 before:inset-0 before:[--size:100px] md:before:[--size:150px] lg:before:[--size:200px] before:[background:radial-gradient(var(--size)_circle_at_var(--x)_var(--y),currentColor,transparent)]"
         bind:this={card}>

        <div class="relative z-10 p-[10%] size-full bg-gradient-to-br from-black/70 to-black/85 backdrop-blur-xl rounded-[18%] overflow-hidden ">
            <img class="rounded-sm size-full object-cover object-center" alt="This is me" src="/favicon.png">
        </div>
    </div>
</div>
