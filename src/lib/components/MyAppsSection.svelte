<script lang="ts">
    import fyboardIcon from "$lib/images/favicons/fyboard.png";
    import fycloudIcon from "$lib/images/favicons/fycloud-purple.png";
</script>

<div class="bg-black/50 pt-6 pb-20 border-t border-gray-600/60">
    <div class="max-content px-8 grid md:grid-cols-2 place-items-center gap-8">
        <div class="md:col-span-2 text-center py-12 flex flex-col items-center gap-6">
            <h2 class="text-blue-100 text-4xl font-bold">
                My Apps
            </h2>
            <p class="text-slate-400 text-xl max-w-[40rem] px-4">
                These are my Web Apps that I have developed. You can find them on GitHub or DockerHub.
            </p>
        </div>

        <div class="relative flex flex-col items-center w-full border-b pb-12 md:pb-0 md:border-b-0 md:border-r border-gray-600/60">
            <img class="w-2/3" src="{fyboardIcon}" alt="Fyboard Icon">

            <h3 class="text-blue-100 text-3xl font-bold mt-6 mb-2">
                Fyboard
            </h3>

            <p class="text-gray-400 text-lg text-center">
                A customizable Dashboard application
            </p>

            <a class="flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 text-neutral-800 mt-8 font-bold transition-all hover:brightness-[85%] unstyled-link after:hidden" target="_blank" href="https://github.com/fyreum/fyboard">
                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
                GitHub
            </a>
        </div>

        <div class="relative  flex flex-col items-center w-full">
            <img class="w-2/3" src="{fycloudIcon}" alt="Fycloud Icon">

            <h3 class="text-blue-100 text-3xl font-bold mt-6 mb-2">
                Fycloud
            </h3>

            <p class="text-gray-400 text-lg text-center">
                A self hosted Cloud & File share solution
            </p>

            <a class="flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 text-neutral-800 mt-8 font-bold transition-all hover:brightness-[85%] unstyled-link after:hidden" target="_blank" href="https://github.com/fyreum/fyreum-cloud">
                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
                GitHub
            </a>
        </div>
    </div>
</div>