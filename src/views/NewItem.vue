<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button default-href="/home"></ion-back-button>
				</ion-buttons>
				<ion-title>New Item</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content ref="content">
			<ion-button @click="scrollToBottom">
				Scroll to Bottom
				<ion-icon ios="heart" md="add"></ion-icon>
			</ion-button>
			<SubComponent></SubComponent>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/vue";
import { ref } from "vue";
import SubComponent from "../components/SubComponent.vue";

const content = ref();
const scrollToBottom = () => {
	content.value.$el.scrollToBottom(300);
};
</script>
