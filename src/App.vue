<template>
	<ion-app>
		<ion-split-pane when="md" content-id="main-content">
			<ion-menu content-id="main-content">
				<ion-header>
					<ion-toolbar>
						<ion-title>Menu Content</ion-title>
					</ion-toolbar>
				</ion-header>
				<ion-content class="ion-padding">This is the menu content.</ion-content>
			</ion-menu>
			<ion-router-outlet id="main-content" />
		</ion-split-pane>
	</ion-app>
</template>

<script setup lang="ts"></script>
