<script lang="ts">
    export let name: string,
        color: 'blue' | 'cyan' | 'green' | 'red' | 'yellow' | 'orange' | 'purple' | 'gray';

    let css;

    switch (color) {
        case 'blue': css = 'bg-blue-600 border-blue-600'; break;
        case 'cyan': css = 'bg-cyan-600 border-cyan-600'; break;
        case 'green': css = 'bg-green-600 border-green-600'; break;
        case 'red': css = 'bg-red-600 border-red-600'; break;
        case 'yellow': css = 'bg-yellow-600 border-yellow-600'; break;
        case 'orange': css = 'bg-orange-600 border-orange-600'; break;
        case 'purple': css = 'bg-purple-600 border-purple-600'; break;
        case 'gray': css = 'bg-gray-600 border-gray-600'; break;
    }
</script>

<span class="rounded-md px-2 text-white border-2 {css} bg-opacity-40 backdrop-brightness-75">
    {name}
</span>