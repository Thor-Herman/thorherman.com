import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'externalLink',
      type: 'boolean',
      title: 'External Link',
      initialValue: false,
    }),
    defineField({
      name: 'githubURL',
      type: 'url',
      title: 'Github URL',
    }),
    defineField({
      name: 'iFrameURL',
      type: 'url',
      title: 'iFrame URL',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'playURL',
      type: 'string',
      title: 'Play URL',
    }),
  ],
})
