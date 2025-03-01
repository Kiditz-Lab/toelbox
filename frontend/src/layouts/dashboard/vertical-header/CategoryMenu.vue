<script lang="ts" setup>
import { DownOutlined, FontSizeOutlined, FileImageOutlined, BgColorsOutlined } from "@ant-design/icons-vue";
</script>
<template>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="text" v-bind="props" class="ml-5">
          Category
          <template v-slot:append>
            <DownOutlined />
          </template>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <template v-slot:prepend>
            <FontSizeOutlined :style="{fontSize: '14px'}" class="mr-4 text-primary" />
          </template>
          <v-list-item-title>Text Tools</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <BgColorsOutlined :style="{fontSize: '14px'}" class="mr-4 text-primary" />
          </template>
          <v-list-item-title>Color Tools</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <FileImageOutlined :style="{fontSize: '14px'}" class="mr-4 text-primary" />
          </template>
          <v-list-item-title>Image Tools</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>