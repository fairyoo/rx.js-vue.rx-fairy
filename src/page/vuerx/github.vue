<template>
  <div class="github">
    <h3>
      {{ title }}
      <input v-model="key" />
      <span v-if="data && !isLoading">({{ data.total_count }} results)</span>
    </h3>
  
    <hr/>
    <h2 v-show="typing">Stop typing to search...</h2>
    <h2 v-show="isLoading">Loading...</h2>
  
    <h5 v-if="data && !isLoading">
      <a class="button" @click="backIndex">Back</a>
      {{ page }} / {{ totalPage }}
      <a class="button" @click="nextIndex">Next</a>
    </h5>
    <p v-if="error">{{ error }}</p>
  
    <hr/>
    <table class="u-full-width" v-if="data && !isLoading">
      <thead>
        <tr>
          <th>Name</th>
          <th>Owner</th>
          <th>Star</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x in data.items">
          <td>
            <a :href="x.html_url" target="_blank">{{ x.name }}</a>
          </td>
          <td>
            <a :href="x.owner.html_url" target="_blank">{{ x.owner.login }}</a>
          </td>
          <td>{{ x.stargazers_count }}</td>
        </tr>
      </tbody>
    </table>
  
    <hr/>
    <input type="button" value="test function" @click="testFunction" />
  </div>
</template>

<script>
import * as API from '@/service/github';
import Vue from 'vue';
import VueRx from 'vue-rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

// import 'skeleton-css/css/normalize.css';
// import 'skeleton-css/css/skeleton.css';

Vue.use(VueRx, { Observable, Subscription, Subject });

export default {
  name: 'github',
  data () {
    return {
      key: '',
      title: '',
      typing: false,
      isLoading: false,
      page: 1,
      error: ''
    };
  },
  subscriptions () {
    const keySource = this.$watchAsObservable('key', { immediate: true })
      .pluck('newValue')
      .do(() => { this.typing = true; })
      .debounceTime(500)
      .do(() => { this.typing = false; })
      .filter((q) => !!q)
      .do(() => { this.page = 1; })
      .do((k) => console.log('get a key =' + k)); // reset page if query changed

    const pageSource = this.$watchAsObservable('page', { immediate: true })
      .pluck('newValue');

    return {
      data: Observable.combineLatest(keySource, pageSource, (q, page) => ({ q, page }))
        .debounceTime(10) // prevent double request when query and page change at same time
        .do(() => {
          // reset error and show isLoading
          this.err = '';
          this.isLoading = true;
        })
        .do(({ q }) => { this.title = q; })
        .flatMap(({ q, page }) => {
          console.log('searching now!');
          return API.search(q, page)
            .catch((err) => {
              this.error = err.message || 'something went wrong :P';
              return Observable.of(null);
            });
        })
        .do(() => { this.isLoading = false; })
    };
  },
  computed: {
    totalPage () {
      if (!this.data) return 0;
      const len = this.data.items && this.data.items.length || 1;
      return Math.ceil(this.data.total_count / len);
    }
  },
  methods: {
    backIndex () {
      if (this.page > 1)--this.page;
    },
    nextIndex () {
      if (this.page < this.totalPage)++this.page;
    },
    testFunction () {
      var source = Observable.interval(1000).take(100);
      var source2 = source.map((v) => {
        // return v + 1;
        return v;
      });
      source2.subscribe({
        next: value => {
          console.log('get a value :' + value);
        }
      });
    }
  }
};

</script>