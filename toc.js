// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="index.html"><strong aria-hidden="true">1.</strong> 企业架构设计方法与实践</a></li><li class="chapter-item "><a href="introduction.html"><strong aria-hidden="true">2.</strong> 前言</a></li><li class="chapter-item "><a href="ea-theory/index.html"><strong aria-hidden="true">3.</strong> 企业架构理论</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="ea-theory/zachman.html"><strong aria-hidden="true">3.1.</strong> Zachman</a></li><li class="chapter-item "><a href="ea-theory/togaf.html"><strong aria-hidden="true">3.2.</strong> TOGAF</a></li><li class="chapter-item "><a href="ea-theory/feaf.html"><strong aria-hidden="true">3.3.</strong> FEAF</a></li><li class="chapter-item "><a href="ea-theory/dodaf.html"><strong aria-hidden="true">3.4.</strong> DoDAF</a></li><li class="chapter-item "><a href="ea-theory/etom.html"><strong aria-hidden="true">3.5.</strong> eTOM</a></li><li class="chapter-item "><a href="ea-theory/archimate.html"><strong aria-hidden="true">3.6.</strong> ArchiMate</a></li><li class="chapter-item "><a href="ea-theory/gartner.html"><strong aria-hidden="true">3.7.</strong> Gartner</a></li></ol></li><li class="chapter-item "><a href="ea-methods/index.html"><strong aria-hidden="true">4.</strong> 企业架构方法论</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="ea-methods/overview.html"><strong aria-hidden="true">4.1.</strong> 企业架构方法论概述</a></li><li class="chapter-item "><a href="ea-methods/strategical-planning.html"><strong aria-hidden="true">4.2.</strong> 企业战略计划</a></li><li class="chapter-item "><a href="ea-methods/ea-planning.html"><strong aria-hidden="true">4.3.</strong> 企业架构规划</a></li><li class="chapter-item "><a href="ea-methods/project-management.html"><strong aria-hidden="true">4.4.</strong> 项目实施管理</a></li><li class="chapter-item "><a href="ea-methods/ea-governance.html"><strong aria-hidden="true">4.5.</strong> 架构运营治理</a></li><li class="chapter-item "><a href="ea-methods/ea-implementation.html"><strong aria-hidden="true">4.6.</strong> 企业架构实施参考</a></li></ol></li><li class="chapter-item "><a href="biz-arch/index.html"><strong aria-hidden="true">5.</strong> 业务架构设计</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="biz-arch/overview.html"><strong aria-hidden="true">5.1.</strong> 业务架构概述</a></li><li class="chapter-item "><a href="biz-arch/theory.html"><strong aria-hidden="true">5.2.</strong> 业务架构的理论参考</a></li><li class="chapter-item "><a href="biz-arch/framework.html"><strong aria-hidden="true">5.3.</strong> 业务架构的内容框架</a></li><li class="chapter-item "><a href="biz-arch/value.html"><strong aria-hidden="true">5.4.</strong> 业务架构的价值</a></li><li class="chapter-item "><a href="biz-arch/elements.html"><strong aria-hidden="true">5.5.</strong> 业务架构的关键要素</a></li><li class="chapter-item "><a href="biz-arch/methods.html"><strong aria-hidden="true">5.6.</strong> 业务架构的设计方法</a></li><li class="chapter-item "><a href="biz-arch/points.html"><strong aria-hidden="true">5.7.</strong> 业务架构的设计关键点</a></li><li class="chapter-item "><a href="biz-arch/reference.html"><strong aria-hidden="true">5.8.</strong> 业务架构的参考设计</a></li></ol></li><li class="chapter-item "><a href="app-arch/index.html"><strong aria-hidden="true">6.</strong> 应用架构设计</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="app-arch/it-arch-overview.html"><strong aria-hidden="true">6.1.</strong> 企业IT架构概述</a></li><li class="chapter-item "><a href="app-arch/overview.html"><strong aria-hidden="true">6.2.</strong> 应用架构概述</a></li><li class="chapter-item "><a href="app-arch/framework.html"><strong aria-hidden="true">6.3.</strong> 应用架构设计框架</a></li><li class="chapter-item "><a href="app-arch/patterns.html"><strong aria-hidden="true">6.4.</strong> 应用架构常用模式</a></li><li class="chapter-item "><a href="app-arch/strategies.html"><strong aria-hidden="true">6.5.</strong> 应用架构核心策略</a></li><li class="chapter-item "><a href="app-arch/domain-driven-design.html"><strong aria-hidden="true">6.6.</strong> 领域驱动设计</a></li><li class="chapter-item "><a href="app-arch/design-methods.html"><strong aria-hidden="true">6.7.</strong> 应用架构的设计方法</a></li><li class="chapter-item "><a href="app-arch/design-principles.html"><strong aria-hidden="true">6.8.</strong> 应用架构的设计原则</a></li><li class="chapter-item "><a href="app-arch/relations.html"><strong aria-hidden="true">6.9.</strong> 应用架构与周边概念的关系</a></li><li class="chapter-item "><a href="app-arch/reference-design.html"><strong aria-hidden="true">6.10.</strong> 应用架构参考设计</a></li></ol></li><li class="chapter-item "><a href="data-arch/index.html"><strong aria-hidden="true">7.</strong> 数据架构设计</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="data-arch/overview.html"><strong aria-hidden="true">7.1.</strong> 数据架构概述</a></li><li class="chapter-item "><a href="data-arch/framework.html"><strong aria-hidden="true">7.2.</strong> 数据架构的设计框架</a></li><li class="chapter-item "><a href="data-arch/planning.html"><strong aria-hidden="true">7.3.</strong> 数据架构规划</a></li><li class="chapter-item "><a href="data-arch/methods.html"><strong aria-hidden="true">7.4.</strong> 数据架构设计方法</a></li><li class="chapter-item "><a href="data-arch/steps.html"><strong aria-hidden="true">7.5.</strong> 数据架构设计步骤</a></li><li class="chapter-item "><a href="data-arch/technology.html"><strong aria-hidden="true">7.6.</strong> 数据架构技术</a></li><li class="chapter-item "><a href="data-arch/principle.html"><strong aria-hidden="true">7.7.</strong> 数据架构原则和规范</a></li><li class="chapter-item "><a href="data-arch/practice.html"><strong aria-hidden="true">7.8.</strong> 数据架构参考实践</a></li><li class="chapter-item "><a href="data-arch/cloud-native.html"><strong aria-hidden="true">7.9.</strong> 云原生时代的数据架构技术体系</a></li></ol></li><li class="chapter-item "><a href="tech-arch/index.html"><strong aria-hidden="true">8.</strong> 技术架构设计</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tech-arch/overview.html"><strong aria-hidden="true">8.1.</strong> 技术架构概述</a></li><li class="chapter-item "><a href="tech-arch/framework.html"><strong aria-hidden="true">8.2.</strong> 技术架构设计框架</a></li><li class="chapter-item "><a href="tech-arch/patterns.html"><strong aria-hidden="true">8.3.</strong> 技术架构常用模式</a></li><li class="chapter-item "><a href="tech-arch/principles.html"><strong aria-hidden="true">8.4.</strong> 技术架构设计原则</a></li><li class="chapter-item "><a href="tech-arch/diagram.html"><strong aria-hidden="true">8.5.</strong> 技术架构制图</a></li><li class="chapter-item "><a href="tech-arch/cloud.html"><strong aria-hidden="true">8.6.</strong> 技术基础设施上云</a></li><li class="chapter-item "><a href="tech-arch/technology.html"><strong aria-hidden="true">8.7.</strong> 技术架构典型技术选型</a></li><li class="chapter-item "><a href="tech-arch/best-practice.html"><strong aria-hidden="true">8.8.</strong> 技术架构最佳实践</a></li></ol></li><li class="chapter-item "><a href="ea-practice/index.html"><strong aria-hidden="true">9.</strong> 企业架构实践</a></li><li class="chapter-item "><a href="governance/index.html"><strong aria-hidden="true">10.</strong> 架构治理演进</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="governance/project/index.html"><strong aria-hidden="true">10.1.</strong> 项目实施管理</a></li><li class="chapter-item "><a href="governance/arch-governance/index.html"><strong aria-hidden="true">10.2.</strong> 架构运营治理</a></li><li class="chapter-item "><a href="governance/assessment/index.html"><strong aria-hidden="true">10.3.</strong> 架构评估方法</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="governance/assessment/atam.html"><strong aria-hidden="true">10.3.1.</strong> ATAM软件架构评估方法</a></li></ol></li><li class="chapter-item "><a href="governance/maturity-model/index.html"><strong aria-hidden="true">10.4.</strong> 架构成熟度模型</a></li><li class="chapter-item "><a href="governance/governance-model/index.html"><strong aria-hidden="true">10.5.</strong> 架构治理模型</a></li><li class="chapter-item "><a href="governance/org-arch/index.html"><strong aria-hidden="true">10.6.</strong> 组织架构</a></li></ol></li><li class="chapter-item "><a href="architect/index.html"><strong aria-hidden="true">11.</strong> 架构师的自我成长</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="architect/what-is-architect.html"><strong aria-hidden="true">11.1.</strong> 什么是架构师</a></li><li class="chapter-item "><a href="architect/character.html"><strong aria-hidden="true">11.2.</strong> 架构师的特质</a></li><li class="chapter-item "><a href="architect/capability.html"><strong aria-hidden="true">11.3.</strong> 企业架构师的能力</a></li><li class="chapter-item "><a href="architect/growth.html"><strong aria-hidden="true">11.4.</strong> 架构师的成长建议</a></li><li class="chapter-item "><a href="architect/mindset.html"><strong aria-hidden="true">11.5.</strong> 架构师的思维模式</a></li></ol></li><li class="chapter-item "><a href="appendix/index.html"><strong aria-hidden="true">12.</strong> 附录</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="appendix/what-is-architecture.html"><strong aria-hidden="true">12.1.</strong> 什么是架构</a></li><li class="chapter-item "><a href="appendix/architecture-principles.html"><strong aria-hidden="true">12.2.</strong> 架构设计原则</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
