<script lang="ts">
    export let name: string,
        color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray';

    let css;

    switch (color) {
        case 'blue': css = 'bg-blue-600 border-blue-600'; break;
        case 'green': css = 'bg-green-600 border-green-600'; break;
        case 'red': css = 'bg-red-600 border-red-600'; break;
        case 'yellow': css = 'bg-yellow-600 border-yellow-600'; break;
        case 'purple': css = 'bg-purple-600 border-purple-600'; break;
        case 'gray': css = 'bg-gray-600 border-gray-600'; break;
    }
</script>

<span class="rounded-md px-2 text-white border {css} bg-opacity-30 backdrop-brightness-50">
    {name}
</span>