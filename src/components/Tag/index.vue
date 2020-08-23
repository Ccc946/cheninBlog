<template>
	<router-link :to="path">
		<div class="tag-box clearfix" :style="bgcolor">
			<i class="sanjiao" :style="color"></i>
			{{tags.name}}
		</div>
	</router-link>
</template>

<script>
export default {
	name: 'Tag',
	props: {
        tags: {
            type: Object,
            default: () => {}
        },
    },
    data() {
        return {
            path: '#',
            bgcolor: 'background-color: ' + this.tags.color + ';',
            color: 'border-right: 9px solid ' + this.tags.color + ';'
        }
    }
}
</script>
<style lang="less" scope>
	.tag-box {
		font-size: 12px;
        display: inline-block;
        text-decoration: none;
        font-weight: normal;
        font-size: 10px;
        color: #fff;
        height: 18px;
        line-height: 18px;
        float: left;
        padding: 0 5px 0px 10px;
        position: relative;
        border-radius: 0 5px 5px 0;
        margin: 5px 9px 5px 18px;
        background-color: #4cae4c;
        .sanjiao {
            position: absolute;
            left: -18px;
            top: 0px;
            border-top: 9px solid #fff;
            border-left: 9px solid #fff;
            border-bottom: 9px solid #fff;
            border-right: 9px solid #4cae4c;
        }
        &:after {
            content: " ";
            width: 4px;
            height: 4px;
            background-color: #fff;
            border-radius: 4px;
            -webkit-box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
            box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
            position: absolute;
            top: 7px;
            left: 2px;
        }
	}
</style>