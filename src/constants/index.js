export const managerTools = [
  {
    name: 'candidate',
    route: 'project-candidate'
  },
  {
    name: 'project',
    route: 'project-manager',
    sub: [
      { name: 'project', route: 'project-manager/manager' },
      { name: 'candidate', route: 'project-manager/candidate' }
    ]
  },
]
export const ROLE_MAP = [
  { key: 9, value: '管理員', route: 'admin' },
  { key: 3, value: '編輯', route: 'editor' },
  { key: 2, value: '總編', route: 'guesteditor' },
  { key: 1, value: '會員', route: 'member' }
]
export const PROJECT_STATUS = [
  { code: 0, name: 'status_draft' },
  { code: 1, name: 'status_wip' },
  { code: 2, name: 'status_finished' },
]