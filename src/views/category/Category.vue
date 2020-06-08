<template>
  <div class="wrapper">
    <ul>
      <li>列表书籍1</li>
      <li>列表书籍2</li>
      <li>列表书籍3</li>
      <li>列表书籍4</li>
      <li>列表书籍5</li>
      <li>列表书籍6</li>
      <li>列表书籍7</li>
      <li>列表书籍8</li>
      <li>列表书籍9</li>
      <li>列表书籍10</li>
      <li>列表书籍11</li>
      <li>列表书籍12</li>
      <li>列表书籍13</li>
      <li>列表书籍14</li>
      <li>列表书籍15</li>
      <li>列表书籍16</li>
      <li>列表书籍17</li>
      <li>列表书籍18</li>
      <li>列表书籍19</li>
      <li>列表书籍20</li>
      <li>列表书籍21</li>
      <li>列表书籍22</li>
      <li>列表书籍23</li>
      <li>列表书籍24</li>
      <li>列表书籍25</li>
      <li>列表书籍26</li>
      <li>列表书籍27</li>
      <li>列表书籍28</li>
      <li>列表书籍29</li>
      <li>列表书籍30</li>
      <li>列表书籍31</li>
      <li>列表书籍32</li>
      <li>列表书籍33</li>
      <li>列表书籍34</li>
      <li>列表书籍35</li>
      <li>列表书籍36</li>
      <li>列表书籍37</li>
      <li>列表书籍38</li>
      <li>列表书籍39</li>
      <li>列表书籍40</li>
      <li>列表书籍41</li>
      <li>列表书籍42</li>
      <li>列表书籍43</li>
      <li>列表书籍44</li>
      <li>列表书籍45</li>
      <li>列表书籍46</li>
      <li>列表书籍47</li>
      <li>列表书籍48</li>
      <li>列表书籍49</li>
      <li>列表书籍50</li>
      <li>列表书籍51</li>
      <li>列表书籍52</li>
      <li>列表书籍53</li>
      <li>列表书籍54</li>
      <li>列表书籍55</li>
      <li>列表书籍56</li>
      <li>列表书籍57</li>
      <li>列表书籍58</li>
      <li>列表书籍59</li>
      <li>列表书籍60</li>
      <li>列表书籍61</li>
      <li>列表书籍62</li>
      <li>列表书籍63</li>
      <li>列表书籍64</li>
      <li>列表书籍65</li>
      <li>列表书籍66</li>
      <li>列表书籍67</li>
      <li>列表书籍68</li>
      <li>列表书籍69</li>
      <li>列表书籍70</li>
      <li>列表书籍71</li>
      <li>列表书籍72</li>
      <li>列表书籍73</li>
      <li>列表书籍74</li>
      <li>列表书籍75</li>
      <li>列表书籍76</li>
      <li>列表书籍77</li>
      <li>列表书籍78</li>
      <li>列表书籍79</li>
      <li>列表书籍80</li>
      <li>列表书籍81</li>
      <li>列表书籍82</li>
      <li>列表书籍83</li>
      <li>列表书籍84</li>
      <li>列表书籍85</li>
      <li>列表书籍86</li>
      <li>列表书籍87</li>
      <li>列表书籍88</li>
      <li>列表书籍89</li>
      <li>列表书籍90</li>
      <li>列表书籍91</li>
      <li>列表书籍92</li>
      <li>列表书籍93</li>
      <li>列表书籍94</li>
      <li>列表书籍95</li>
      <li>列表书籍96</li>
      <li>列表书籍97</li>
      <li>列表书籍98</li>
      <li>列表书籍99</li>
      <li>列表书籍100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      pullUpLoad: true
    });

    // 1、probeType属性是监听触摸属性，需要使用scroll点方法
    this.scroll.on("scroll", position => {
      console.log(position);
    });

    //2、pullUpLoad属性是上拉加载更多，需要使用pullingUp
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  }
};
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: red;
  overflow: hidden;
}
</style>
