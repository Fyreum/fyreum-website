<script lang="ts">
    export let name: string,
        color: 'blue' | 'cyan' | 'green' | 'red' | 'yellow' | 'orange' | 'purple' | 'gray';

    let css;

    switch (color) {
        case 'blue': css = 'bg-blue-600 text-blue-600'; break;
        case 'cyan': css = 'bg-cyan-600 text-cyan-600'; break;
        case 'green': css = 'bg-green-600 text-green-600'; break;
        case 'red': css = 'bg-red-600 text-red-600'; break;
        case 'yellow': css = 'bg-yellow-600 text-yellow-600'; break;
        case 'orange': css = 'bg-orange-600 text-orange-600'; break;
        case 'purple': css = 'bg-purple-600 text-purple-600'; break;
        case 'gray': css = 'bg-gray-600 text-gray-600'; break;
    }
</script>

<span class="rounded-md px-2.5 py-0.5 {css} bg-opacity-30 font-semibold">
    {name}
</span>