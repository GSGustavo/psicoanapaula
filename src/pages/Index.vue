<script>
import Badge from '../components/Badge.vue'
import IconResiliencia from '../components/icons/IconResiliencia.vue'
export default {
    components: { Badge, IconResiliencia }
}
</script>

<template>
    <div class="p-5 bg-primary">
        <!-- badges -->
        <div class="flex">
            <Badge>
                <IconResiliencia class="text-primary"/>
                 Resiliência
            </Badge>
        </div>
    </div>
</template>