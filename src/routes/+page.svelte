<script lang="ts">
    import ConfigurableGridItem from "$lib/components/ConfigurableGridItem.svelte";
    import SubHeader from "$lib/components/SubHeader.svelte";
    // Images
    import erethon from "$lib/images/arvisburg_wallpaper.jpg";
    import bedrock from "$lib/images/bedrock_screenshot.png";
    import bedrockDocs from "$lib/images/bedrock_docs_screenshot.png";
    import revine from "$lib/images/revine_oppenheimer.png";
    import fyreum from "$lib/images/favicon_pixelated_v5.png";

    let myAge = calculateAge(new Date("2003-07-26").getTime());

    function calculateAge(date : number) {
        let now = Date.now();
        let diff = Math.abs(now - date);
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    }
</script>

<svelte:head>
    <title>Fyreum - Homepage</title>
    <meta name="description" content="I'm a self-taught Java-Developer and semi noob at Webdesign. This page shows some
    of my projects and current work!">
</svelte:head>

<div class="px-2 mb-6 max-w-5xl w-full">
    <div id="construction-notice" class="mono-tag-blue max-w-2xl w-full p-4 mx-auto text-center rounded-xl">
        This Website is currently under construction. Some content may be missing or incomplete.
        Thank you for your understanding!
    </div>

    <SubHeader header="About Me" customId="about"></SubHeader>

    <ConfigurableGridItem
            header="Fyreum"
            projectInfo="Me"
            large={true}
            image={fyreum}
            disableButton={true}
            customClasses="pixelated"
            description="Moin! My name is Luka. I'm a self-taught Java-Developer and semi noob at Webdesign.
            I'm currently {myAge} years old and study computer science at the University Hamburg.
            <br>
            <br>
            Here is an overview for some of my projects over the past couple of years.">
    </ConfigurableGridItem>

    <SubHeader header="Projects"></SubHeader>

    <div id="projects-section" class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
        <ConfigurableGridItem
                header="Erethon"
                projectInfo="Server"
                large={true}
                flip={true}
                image={erethon}
                href="https://erethon.de/"
                externalLink={true}
                description="Erethon is a Medieval-MMORPG-Factions Server for Minecraft. It offers plenty of custom-made
                content and in-game features, as well as a lively community since 2011.
                <br>
                As an Admin, I'm responsible for the custom Plugin-Development and in-game features like commands, player UI and more.
                <br>
                <br>
                The Server is currently offline but is soon to be re-released with more content than ever!">
        </ConfigurableGridItem>
        <ConfigurableGridItem
                header="Bedrock"
                projectInfo="Library"
                image={bedrock}
                href="https://github.com/DRE2N/Bedrock"
                externalLink={true}
                description="Bedrock is the core library for every Bukkit plugin made by Erethon. It contains custom commands,
                configurations, user caching, version-compatibility and more. Bedrock is designed to simplify the workflow
                of a plugin developer, by preventing unnecessary lines of code for recurring problems/features.">
        </ConfigurableGridItem>
        <ConfigurableGridItem
                header="Documentation"
                projectInfo="Docs"
                image={bedrockDocs}
                href="https://docs.erethon.de/bedrock/intro"
                externalLink={true}
                description="Working in a team often times requires communication. To simplify the process of working with
                each other's code, documentations come in handy! As the Bedrock library is used in almost all of Erethon's
                projects, documenting complex parts of it becomes mandatory.">
        </ConfigurableGridItem>
        <ConfigurableGridItem
                header="Streaming Panel"
                projectInfo="Streaming"
                large={true}
                image={revine}
                description="Together with some friends of mine, I'm building a Plex-like streaming platform, that offers
                realtime movie data like durations, trailers & descriptions via the TMDb API. This project combines Frontend (UI)
                and Backend (API), to create a useful Web-App.">
        </ConfigurableGridItem>
    </div>

    <SubHeader header="Contact"></SubHeader>

    <div class="flex flex-col items-center glass-bg p-4 rounded-xl">
        <table class="w-fit justify-center">
            <tr>
                <td class="pr-8 md:pr-16 xl:pr-24">Discord:</td>
                <td>Fyreum (fyreum)</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><a href="mailto:mail@fyreum.de">mail@fyreum.de</a></td>
            </tr>
        </table>
    </div>
</div>