export type Project = { name: string; description: string; link: string; video?: string; id: string }
export type WorkExperience = { company: string; title: string; start: string; end: string; link: string; id: string }
export type BlogPost = { title: string; description: string; link: string; uid: string }
export type SocialLink = { label: string; link: string }
export const PROJECTS: Project[] = [
 { name: 'PersonaFactor', description: '面向多场景大模型个性化的可解释用户偏好因素建模，ICLR 2027 在投。', link: '#research', id: 'project1' },
 { name: 'CoPA 个性化问答基准', description: '从用户认知因素出发构建个性化问答评测基准，ACL 2026 Findings。', link: '#research', id: 'project2' },
 { name: '教学编程智能反馈系统', description: '部署 DeepSeek-Coder-33B，提供面向教学场景的实时流式问答与个性化反馈。', link: '#research', id: 'project3' },
]
export const WORK_EXPERIENCE: WorkExperience[] = [
 { company: '上海合合信息科技股份有限公司（扫描全能王）', title: '大模型算法工程师', start: '2024.05', end: '2024.11', link: '#experience', id: 'work1' },
 { company: '上海芯擎科技有限公司（ARM 子公司）', title: 'AI 工具链开发工程师', start: '2023.06', end: '2023.12', link: '#experience', id: 'work2' },
]
export const BLOG_POSTS: BlogPost[] = [
 { title: '大模型个性化：从用户画像到稳定偏好因素', description: '记录个性化问答与用户建模研究。', link: '#research', uid: 'blog-1' },
 { title: '多模态模型评测实践', description: '分享文档抽取场景中的模型部署与评测经验。', link: '#experience', uid: 'blog-2' },
]
export const SOCIAL_LINKS: SocialLink[] = [
 { label: 'GitHub', link: 'https://github.com/3kyou1' },
 { label: 'Email', link: 'mailto:s-sh25@bza.edu.cn' },
]
export const EMAIL = 's-sh25@bza.edu.cn'
