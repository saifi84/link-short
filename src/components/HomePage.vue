<template>
<div>
    <div class="d-flex flex-column align-center mt-4">
        <!-- <v-img src="../assets/pngwing.com.png" width="150" height="150"></v-img> -->
        <p class="text-h4 text-center mt-8 ">Paste the URL to be Shortended</p>
    </div>

    <div class="d-flex justify-center align-center ml-16 pl-10 ">
        <v-row justify="center">
            <v-col cols="12" sm="3" md="3">
                <v-select v-model="select" :items="items" item-text="stateName" persistent-hint return-object filled></v-select>
            </v-col>
            <v-col cols="12" sm="8" md="6">
                <v-text-field v-model="txtField" label="Enter IP" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3">
                <v-btn v-on:click="getDetail" depressed class="py-7 ml-n1 ml-5 " color="primary"> SHORTEN </v-btn>
            </v-col>
        </v-row>
    </div>
    <v-card class="mx-auto my-12" max-width="50%">
        <v-row class="pl-6 pr-6 pt-6 pb-4 d-flex justify-space-between">
            <div>
                <b>Short Link: </b>
                
<!-- 
<a :href="link_url" class="text-dark" target="_blank" rel="noopener noreferrer" ref="mylink">
    {{ link_name }}
</a> -->

                <div ref="mytext"><a :href=detail.short_url target="_blank" ref="mytext">{{ detail.short_url }}</a></div>
            </div>
            <div>
                <v-btn v-on:click="copyUrl" color="primary"> Copy </v-btn>
            </div>
        </v-row>

    </v-card>
    <v-row align="center">

        <v-col cols="6">

        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            select: {
                stateName: 't.ly',
                state: 'https://t.ly/'
            },
            items: [{
                    stateName: 't.ly',
                    state: 'https://t.ly/'
                },
                {
                    stateName: 'ibit.ly',
                    state: 'https://ibit.ly/'
                },
                {
                    stateName: 'jpeg.ly',
                    state: 'https://jpeg.ly/'
                },
                {
                    stateName: 'twtr.to',
                    state: 'https://twtr.to/'
                },

            ],
            txtField: '',
            domainName: null,
            arr: []
        }
    },
    computed: {
        detail() {
            // eslint-disable-next-line
            debugger;
            return this.$store.state.detail;
        }
    },
    mounted() {},

    methods: {
        onChange(event) {
            // eslint-disable-next-line
            debugger;
            console.log(event.target.value);
            // eslint-disable-next-line
            debugger;
            this.domainName = event.target.value;
        },
        getDetail() {
            // eslint-disable-next-line
            debugger;
            this.domainName = this.select.state;
            this.$store.dispatch('getDetail', [this.txtField, this.domainName]);
        },
        async copyURL(mytext) {
            // eslint-disable-next-line
            debugger;
            try {
                await navigator.clipboard.writeText(mytext);
                alert('Copied');
            } catch ($e) {
                alert('Cannot copy');
            }
        }
    }
}
</script>

<style scoped>
.drop {
    width: 30%;
    margin: 1rem auto;
}
</style>
