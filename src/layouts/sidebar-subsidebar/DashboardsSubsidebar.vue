<script setup lang="ts">
const openSubsidebarLinks = ref('')
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <ProjectsQuickDropdown />

      <h3 class="no-mb">Dashboards</h3>
      <div
        class="panel-close"
        tabindex="0"
        @keydown.space.prevent="emit('close')"
        @click="emit('close')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="personal">
          <template #header>
            <i
              aria-hidden="true"
              class="iconify logo-design"
              data-icon="healthicons:money-bag-outline"
            />
            Loans
            <i aria-hidden="true" class="iconify change-angle" data-icon="formkit:down" />
          </template>

          <RouterLink to="/sidebar/dashboards" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
            <span>Personal V1</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/personal-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-pie-chart"></i>
            <span>Personal V2</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/personal-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-stats-up"></i>
            <span>Personal V3</span>
          </RouterLink>
        </VCollapseLinks>

        <li class="divider"></li>

        <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="assignment">
          <template #header>
            <i
              aria-hidden="true"
              class="iconify logo-design"
              data-icon="ic:round-shield"
            />
            Anti Predatory
            <i aria-hidden="true" class="iconify change-angle" data-icon="formkit-down" />
          </template>

          <RouterLink to="/sidebar/dashboards/anand" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
            <span>Anand V1</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/anand-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-pie-chart"></i>
            <span>Anand V2</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/anand-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-stats-up"></i>
            <span>Anand V3</span>
          </RouterLink>
        </VCollapseLinks>

        <li class="divider"></li>

        <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="finance">
          <template #header>
            <i
              aria-hidden="true"
              class="iconify logo-design"
              data-icon="pajamas:building"
            />
            Condo Review
            <i aria-hidden="true" class="iconify change-angle" data-icon="formkit:down" />
          </template>

          <RouterLink to="/sidebar/dashboards/analytics" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
            <span>Analytics Dashboard</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/stocks" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-stats-up"></i>
            <span>Stocks Dashboard</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/sales" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-credit-card"></i>
            <span>Sales Dashboard</span>
          </RouterLink>
        </VCollapseLinks>

        <li class="divider"></li>

        <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="banking">
          <template #header>
            <i
              aria-hidden="true"
              class="iconify logo-design"
              data-icon="material-symbols:support-agent-rounded"
            />
            Closing Agents
            <i aria-hidden="true" class="iconify change-angle" data-icon="formkit:down" />
          </template>

          <RouterLink to="/sidebar/dashboards/banking-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bank"></i>
            <span>Banking V1</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/banking-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bank"></i>
            <span>Banking V2</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/banking-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bank"></i>
            <span>Banking V3</span>
          </RouterLink>
        </VCollapseLinks>

        <!-- <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="business">
          <template #header>
            Business
            <i aria-hidden="true" class="iconify" data-icon="formkit:down" />
          </template>

          <RouterLink to="/sidebar/dashboards/flights" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
            <span>Flights Booking</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/company" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-apartment"></i>
            <span>Company Board</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/human-ressources" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-users-alt"></i>
            <span>HR Board</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/course" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-graduate"></i>
            <span>Course Dashboard</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/jobs" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-briefcase"></i>
            <span>Jobs Dashboard</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="lifestyle">
          <template #header>
            Lifestyle
            <i aria-hidden="true" class="iconify" data-icon="formkit:down" />
          </template>

          <RouterLink to="/sidebar/dashboards/influencer" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-cardiology"></i>
            <span>Influencer</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/hobbies" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-cloud-sun"></i>
            <span>Hobbies</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/health" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-hospital-alt-3"></i>
            <span>Health</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/writer" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-books"></i>
            <span>Writer</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/video" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-video-alt-1"></i>
            <span>Video</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/soccer" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-tshirt"></i>
            <span>Soccer Dashboard</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="ecommerce">
          <template #header>
            Ecommerce
            <i aria-hidden="true" class="iconify" data-icon="formkit:down" />
          </template>

          <RouterLink to="/sidebar/dashboards/ecommerce-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-cart"></i>
            <span>Ecommerce V1</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="apps">
          <template #header>
            Apps
            <i aria-hidden="true" class="iconify" data-icon="formkit:down" />
          </template>

          <RouterLink to="/sidebar/dashboards/food-delivery" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-pizza"></i>
            <span>Food Delivery</span>
          </RouterLink>
          <RouterLink to="/sidebar/maps-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-map"></i>
            <span>Maps V1</span>
            <VTag label="v1.2" color="primary" outlined curved />
          </RouterLink>
          <RouterLink to="/sidebar/maps-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-map"></i>
            <span>Mapp V2</span>
            <VTag label="v1.2" color="primary" outlined curved />
          </RouterLink>
          <RouterLink to="/inbox" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-envelope"></i>
            <span>Inbox</span>
          </RouterLink>
          <RouterLink to="/messaging-v1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bubble"></i>
            <span>Messaging V1</span>
          </RouterLink>
          <RouterLink to="/messaging-v2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-bubble"></i>
            <span>Messaging V2</span>
          </RouterLink>
        </VCollapseLinks> -->

        <li class="divider"></li>

        <li class="left-margin">
          <i aria-hidden="true" class="iconify" data-icon="tdesign:building" />
          <RouterLink to="/wizard-v1">Builders</RouterLink>
        </li>

        <li class="divider"></li>

        <li class="left-margin">
          <i aria-hidden="true" class="iconify" data-icon="bi:house-gear" />
          <RouterLink to="/wizard-v1">Appraisal Disputes</RouterLink>
        </li>

        <li class="divider"></li>

        <li class="left-margin">
          <i aria-hidden="true" class="iconify" data-icon="clarity:form-line" />
          <RouterLink to="/wizard-v1">Arizona Forms</RouterLink>
        </li>

        <li class="divider"></li>

        <li class="left-margin">
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="streamline:money-cash-search-dollar-search-pay-product-currency-query-magnifying-cash-business-money-glass"
          />
          <RouterLink to="/wizard-v1">Servicer Lookup</RouterLink>
        </li>

        <li class="divider"></li>

        <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="charts">
          <template #header>
            <i
              aria-hidden="true"
              class="iconify logo-design"
              data-icon="healthicons:dollar-negative"
            />
            Payoff
            <i aria-hidden="true" class="iconify change-angle" data-icon="formkit:down" />
          </template>
          <RouterLink to="/sidebar/dashboards/charts-apex" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-pie-chart-alt"></i>
            <span>Apex Charts</span>
          </RouterLink>

          <RouterLink class="is-submenu" to="/sidebar/dashboards/charts-billboardsjs">
            <i aria-hidden="true" class="lnil lnil-bar-chart"></i>
            <span>Billboard JS</span>
          </RouterLink>
        </VCollapseLinks>

        <li class="divider"></li>

        <li class="left-margin">
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="fluent:document-error-24-regular"
          />
          <RouterLink to="/wizard-v1">UW Exception</RouterLink>
        </li>

        <!-- <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="widgets">
          <template #header>
            Widgets
            <i aria-hidden="true" class="iconify" data-icon="formkit:down" />
          </template>

          <RouterLink to="/sidebar/dashboards/widgets-sample-ui" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>UI Widgets</span>
          </RouterLink>
          <RouterLink class="is-submenu" to="/sidebar/dashboards/widgets-sample-creative">
            <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
            <span>Creative Widgets</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/widgets-sample-list" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>List Widgets</span>
          </RouterLink>
          <RouterLink to="/sidebar/dashboards/widgets-sample-stats" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
            <span>Stat Widgets</span>
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks v-model:open="openSubsidebarLinks" collapse-id="starters">
          <template #header>
            Starters
            <i aria-hidden="true" class="iconify" data-icon="formkit:down" />
          </template>

          <RouterLink to="/starters/sidebar-blank-page-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Regular Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Colored Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Colored Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-5" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Labels Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-6" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Labels Hover Sidebar</span>
          </RouterLink>
          <RouterLink to="/starters/sidebar-blank-page-7" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Float Sidebar</span>
          </RouterLink>
          <hr class="navbar-divider" />
          <RouterLink to="/starters/sideblock-blank-page-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Regular Sideblock</span>
            <VTag label="v2.2" color="primary" outlined curved />
          </RouterLink>
          <RouterLink to="/starters/sideblock-blank-page-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Sideblock</span>
            <VTag label="v2.2" color="primary" outlined curved />
          </RouterLink>
          <RouterLink to="/starters/sideblock-blank-page-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Colored Sideblock</span>
            <VTag label="v2.2" color="primary" outlined curved />
          </RouterLink>
          <RouterLink to="/starters/sideblock-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Curved Colored</span>
            <VTag label="v2.2" color="primary" outlined curved />
          </RouterLink>
          <hr class="navbar-divider" />
          <RouterLink to="/starters/navbar-blank-page-1" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Regular Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-2" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Fading Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-3" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Colored Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-4" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Dropdown Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-5" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Colored Dropdown</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-6" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Clean Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-7" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Clean Center Navbar</span>
          </RouterLink>
          <RouterLink to="/starters/navbar-blank-page-8" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
            <span>Clean Fade Navbar</span>
          </RouterLink>
        </VCollapseLinks> -->
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';

.logo-design {
  margin-right: 15px;
}
</style>
