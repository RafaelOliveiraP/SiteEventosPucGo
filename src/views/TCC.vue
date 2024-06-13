<template>
  <div>
    <!-- <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-150/500)*100vw + 67.304015296px)"
    ></PhotoHeader> -->

    <Main class="main">
      
      <h4 class="text-center">APRESENTAÇÕES DE TCC</h4>
      <br>
      <br>

      <div class="text-center">
        <div class="dropdown-container">
          <label for="semester">
            <h4>Selecione o semestre: </h4>
            </label>
          <select id="semester" v-model="selectedSemester" @change="handleChange">
            <option value="2024/1">2024/1</option>
            <option value="2023/2">2023/2</option>
          </select>
        </div>
      </div>

      <div v-if="selectedSemester === '2023/2'" class="year-month" id="2023_2">
        <!-- Content for 2023/2 -->
          <div class="filtro">
          <div class="text-center">
            <form>
              <div class="form">
                <div class="radioButton">
                  <input v-on:click="filtrarTCC1()" type="radio" id="tcc1" name="tcc" value="tcc1">
                  <label for="tcc1" class="label-radioButton"><b>TCC I</b></label>
                </div>
      
                <div class="radioButton">
                  <input type="radio" v-on:click="filtrarTCC2()" id="tcc2" name="tcc" value="tcc2" checked>
                  <label for="tcc2" class="label-radioButton"><b>TCC II</b></label>
                </div>
              </div>
            </form>
          </div>
          <div class="button-container">
            <button class="button" v-on:click="clearFilter">Todas as datas</button>
            <button class="button" v-on:click="filterPalestras">11/12</button>
            <button class="button" v-on:click="filterPalestras">12/12</button>
            <button class="button" v-on:click="filterPalestras">13/12</button>
            <button class="button" v-on:click="filterPalestras">14/12</button>
            <button class="button" v-on:click="filterPalestras">15/12</button>
            <button class="button" v-on:click="filterPalestras">16/12</button>          
          </div>        
        </div>
        <br>
        <br>
        <div class="courses-list">
          <div v-for="(props, index) in filtered_tccs" :key="index">
            <!--<h3 class="section-course">{{ props.curso }}</h3> -->
            <div v-for="(tcc, index) in props.tccs" :key="index">
              <TccSection :tcc="tcc"></TccSection>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div v-if="selectedSemester === '2024/1'" class="year-month" id="2024_1">
        <!-- Content for 2024/1 -->
          <div class="filtro">
          <div class="text-center">
            <form>
              <div class="form">
                <div class="radioButton">
                  <input v-on:click="filtrarTCC1()" type="radio" id="tcc1" name="tcc" value="tcc1">
                  <label for="tcc1" class="label-radioButton"><b>TCC I</b></label>
                </div>
      
                <div class="radioButton">
                  <input type="radio" v-on:click="filtrarTCC2()" id="tcc2" name="tcc" value="tcc2" checked>
                  <label for="tcc2" class="label-radioButton"><b>TCC II</b></label>
                </div>
              </div>
            </form>
          </div>
          <div class="button-container">
            <button class="button" v-on:click="clearFilter">Todas as datas</button>
            <button class="button" v-on:click="filterPalestras">17/06</button>
            <button class="button" v-on:click="filterPalestras">18/06</button>
            <button class="button" v-on:click="filterPalestras">19/06</button>
            <button class="button" v-on:click="filterPalestras">20/06</button>
            <button class="button" v-on:click="filterPalestras">21/06</button>
            <button class="button" v-on:click="filterPalestras">22/06</button>          
          </div>        
        </div>
        <br>
        <br>
        <div class="courses-list">
          <div v-for="(props, index) in filtered_tccs" :key="index">
            <!--<h3 class="section-course">{{ props.curso }}</h3> -->
            <div v-for="(tcc, index) in props.tccs" :key="index">
              <TccSection :tcc="tcc"></TccSection>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Main>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from '../components/organization/Main.vue';
import TccSection from '../components/tccSection/index.vue';

// Import data files for both semesters
import { apresentacoes_TCC as apresentacoes_TCC_2023_2 } from '@/storage/programacao/TCCs_2023_2';
import { apresentacoes_TCC as apresentacoes_TCC_2024_1 } from '@/storage/programacao/TCCs_2024_1';

@Component({
  components: {
    Main,
    TccSection
  }
})
export default class TCC extends Vue {
  private selectedSemester: string = '2024/1';
  private tipo_TCC: number = 2;
  private ultima_data: string | null = null;
  private all_tccs: any[] = [];
  private filtered_tccs: any[] = [];

  mounted() {
    this.loadData();
  }

  handleChange() {
    this.loadData();
  }

  loadData() {
    // Determine which data to use based on selected semester
    if (this.selectedSemester === '2023/2') {
      this.all_tccs = apresentacoes_TCC_2023_2;
    } else if (this.selectedSemester === '2024/1') {
      this.all_tccs = apresentacoes_TCC_2024_1;
    }

    // Apply filters based on tipo_TCC and ultima_data
    this.applyFilters();
  }

  applyFilters() {
    if (this.ultima_data === null) {
      this.filtered_tccs = this.all_tccs.map(item => ({
        ...item,
        tccs: item.tccs.filter(aux => aux.tipoTCC === this.tipo_TCC)
      }));
    } else {
      this.filtered_tccs = this.all_tccs.map(item => ({
        ...item,
        tccs: item.tccs.filter(aux => aux.date === this.ultima_data && aux.tipoTCC === this.tipo_TCC)
      }));
    }
  }

  filterPalestras(e) {
    let data = e.target.innerText;
    this.ultima_data = data;
    this.applyFilters();
  }

  clearFilter() {
    this.ultima_data = null;
    this.applyFilters();
  }

  filtrarTCC1() {
    this.tipo_TCC = 1;
    this.applyFilters();
  }

  filtrarTCC2() {
    this.tipo_TCC = 2;
    this.applyFilters();
  }
}
</script>

<style scoped>

 /* General styles for dropdown container */
 .dropdown-container {
      display: inline-block;
      font-family: Arial, sans-serif; /* Adjust font-family as needed */
      font-size: 14px; /* Adjust font-size as needed */
      text-align: center; 
    }
  .dropdown-container label {
    margin-right: 10px; /* Adjust as needed */
  }

    /* Styling for the select element */
    .dropdown-container select {
      appearance: none; /* Remove default appearance (e.g., arrow) */
      padding: 10px 40px 10px 15px; /* Padding for select box */
      border: 1px solid #ccc; /* Border style */
      background-color: #fff; /* Background color */
      color: #333; /* Text color */
      cursor: pointer; /* Cursor style on hover */
      border-radius: 4px; /* Optional: Rounded corners */
      outline: none; /* Remove outline */
      width: 160px; /* Set width as needed */
    }

    /* Styling for the dropdown arrow icon (optional) */
    .dropdown-container::after {
      content: '\25BC'; /* Unicode character for down arrow */
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      pointer-events: none; /* Ensure arrow is not clickable */
    }

.main {
  padding-top: 50px;
}

.form {
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.filtro {
  margin-bottom: 20px;
}

.radioButton {
  padding: 10px;
  margin: 1rem;
  font-size: 1.7rem;
}

.label-radioButton {
  margin-left: 5px;
}

input[type="radio"] {
  width: 20px;
  height: 20px;
}



.linha {
  border: 1px solid #777;
}

.courses-list > div:not(:first-child) {
  margin-top: 35px;
}

.section-course {
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  background-color: whitesmoke;
  box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03),
    0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03),
    0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05),
    0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
  padding: 1rem;
  color: black;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5rem;
}

.button {
  padding: 0.6rem;
  border: 0.1rem solid white;
  border-radius: 5rem;
  font-weight: 700;
  background-color: #006ca3;
  margin-right: 2rem;
  color: white;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

.button:focus {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

@media screen and (max-width: 745px) {
  .button-container {
    flex-direction: column;
  }
  .button {
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 800px) {
  .button {
    width: 10.5rem;
  }
}

h4 {
  color: black;
  margin-bottom: 3rem;
}

</style>
