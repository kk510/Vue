import { mount } from "@vue/test-utils";
import Button from "../../src/components/Button.vue";
describe("Button", () => {
    test("disabled", () => {
        const wrapper = mount(Button, {
            propsData: {
                disabled: true,
            },
        });

        wrapper.find("[data-testid='btn']").trigger("click");
        expect(wrapper.emitted("click")).toBeFalsy();
    });

    // todo
    // 测试 button slot 显示的内容
    test("slot default", () => {
        const wrapper = mount(Button, {
            slots: {
                default: '<button>按钮</button>'
            }
        })

        expect(wrapper.text()).toBe("按钮")
    })
    test("should show slot content", () => {
            const wrapper = mount(Button, {})

            expect(wrapper.text()).toBe("kkb")
        })
        // 测试 button 点击的时候发出 click 自定义事件
    test.only("should emit click event", async() => {
        const wrapper = mount(Button, {})
        await wrapper.find("[data-testid='btn']").trigger("click")
            //发送时间则返回true
        expect(wrapper.emitted("click")).toBeTruthy()


    })
});